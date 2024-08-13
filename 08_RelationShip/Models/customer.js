const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(() =>{
    console.log("Connection Successfuly")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const orderSchema = new Schema ({
    item: String,
    price: Number,
})

// Customer Schema

const customerSchema = new Schema({
    name: String,
    orders : [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        },
    ],
});

// customerSchema.pre("findOneAndDelete", async() =>{
//     console.log("Pre Middleware")
// })

customerSchema.post("findOneAndDelete", async(customer) =>{
    if(customer.orders.length){
        let res = await Order.deleteMany({ _id: {$in: customer.orders} })
        console.log(res)
    }
})

const Order = mongoose.model("Order", orderSchema)
const Customer = mongoose.model("Customer", customerSchema)

const findCustomer = async() =>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0])

};

// findCustomer();

const addCust= async() =>{
    let newCust = new Customer({
        name : "Shahid Afridi"
    })
    let newOrder = new Order({
        item: "Burger",
        price: 200
    })
    newCust.orders.push(newOrder)

    await newOrder.save();
    await newCust.save();
    console.log("new customer added successfuly")
}
// addCust();


const deleteCust = async() =>{
    let data = await Customer.findByIdAndDelete("66bac317c3950d3ae89bb316");
    console.log(data)
}
deleteCust()

// const addOrders = async () => {
//     let result = await Order.insertMany([
//         {item: "Samonsa", price: 12},
//         {item: "Chocolate", price: 10},
//         {item: "Chips", price: 15},
//     ]);
//     console.log(result)
// }
// addOrders();