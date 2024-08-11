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

const Order = mongoose.model("Order", orderSchema)
const Customer = mongoose.model("Customer", customerSchema)

const addCustomer = async() =>{
    // let cust1 = new Customer({
    //     name: "Monsaf ali",
    // });
    // let order1 = await Order.findOne({item: "Chips"})
    // let order2 = await Order.findOne({item: "Samonsa"})

    // cust1.orders.push(order1)
    // cust1.orders.push(order2)


    // let result = await cust1.save();
    // console.log(result)
    let result = await Customer.find({});
    console.log(result)

};

addCustomer();



// const addOrders = async () => {
//     let result = await Order.insertMany([
//         {item: "Samonsa", price: 12},
//         {item: "Chocolate", price: 10},
//         {item: "Chips", price: 15},
//     ]);
//     console.log(result)
// }
// addOrders();