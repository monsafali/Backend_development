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

const findCustomer = async() =>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0])

};

findCustomer();



// const addOrders = async () => {
//     let result = await Order.insertMany([
//         {item: "Samonsa", price: 12},
//         {item: "Chocolate", price: 10},
//         {item: "Chips", price: 15},
//     ]);
//     console.log(result)
// }
// addOrders();