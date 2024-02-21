function CreateOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(order);
        }, 1000);
    })
}

function PaymentOrder(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(orderId);
            //reject("Sorry Order not found");
        }, 1000);
    })
}

let order = "Arun's Order Executed";

CreateOrder(order)
.then((orderId)=> PaymentOrder(orderId))
.then((res)=>console.log(res))
.catch((err)=> console.log(err));