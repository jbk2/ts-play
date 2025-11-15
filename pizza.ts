let cashInTill = 100
let nextOrderId = 1
let nextPizzaId = 1
const orderHistory: Order[] = []

type Pizza = {
  id: number
  name: string,
  price: number
}

type NewPizza = Omit<Pizza, 'id'>

type Status = 'ordered' | 'completed'

type Order = {
  id: number,
  pizza: Pizza,
  status: Status
}

const menu: Pizza[] = [
  { id: nextPizzaId++, name: 'margherita', price: 10 },
  { id: nextPizzaId++, name: 'pepperoni', price: 12 },
  { id: nextPizzaId++, name: 'quatre frommage', price: 13 },
  { id: nextPizzaId++, name: 'al forno', price: 12 }
]


function addPizza(pizzaObject: NewPizza): Pizza {  
  const pizza: Pizza = {
    id: nextPizzaId++,
   ...pizzaObject
  }

  menu.push(pizza);
  return pizza;
}

function placeOrder(pizzaName: string): Order | void {
  const chosenPizza = menu.find(pizza => pizza.name === pizzaName.toLowerCase());
  if(!chosenPizza) {
    console.error('this pizza name was not on the menu', pizzaName);
    return;
  };
  const order: Order = { id: nextOrderId++, pizza: chosenPizza, status: 'ordered' };
  orderHistory.push(order);
  cashInTill += order.pizza.price
  return order;
}

function completeOrder(id: number): Order | void {
  const order = orderHistory.find(order => order.id === id);
  if(!order) {
    console.error('this order id was not present in the orderQueue', id);
    return;
  };
  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: string | number): Pizza | void {
  if(typeof identifier === 'number') {
    return menu.find(pizza => pizza.id === identifier);
  } else if ((typeof identifier === 'string')) {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
  } else {
    console.error('parameter type must be of either string or number')
  };
};

// console.log(menu);
const calzone = { name: 'calzone', price: 14 }
addPizza(calzone);
// console.log(menu);
console.log(cashInTill);
const order = placeOrder('margherita');
console.log(order);
console.log(cashInTill);
console.log(orderHistory);
completeOrder(1);
console.log(orderHistory);
const order2 = placeOrder('pepperoni');
console.log(orderHistory);
completeOrder(2);
console.log(orderHistory);
