// const menu = [
//   { name:'margherita', price: 10 },
//   { name:'pepperoni', price: 12 },
//   { name:'quatre frommage', price: 13 },
//   { name:'al forno', price: 12 }
// ]

// let cashInTill = 100
// const orderQueue = []
// let nextOrderId = 1

// function addPizza(name, price) {
//   const lowerCasedName = name.toLowerCase();
//   menu.push({ lowerCasedName, price });
// }

// function placeOrder(pizzaName) {
//   const chosenPizza = menu.find(pizza => pizza.name === pizzaName.toLowerCase());
//   const order = { pizza: chosenPizza, status: 'ordered', id: nextOrderId++ };
//   orderQueue.push(order);
//   cashInTill += order.pizza.price
//   return order;
// }

// function completeOrder(id) {
//   const order = orderQueue.find(order => order.id === id);
//   order.status = "completed";
//   return order;
// }

// // console.log(menu);
// addPizza('calzone', 14);
// // console.log(menu);
// console.log(cashInTill);
// const order = placeOrder('margherita');
// console.log(order);
// console.log(cashInTill);
// console.log(orderQueue);
// completeOrder(1);
// console.log(orderQueue);
// const order2 = placeOrder('pepperoni');
// console.log(orderQueue);
// completeOrder(2);
// console.log(orderQueue);
