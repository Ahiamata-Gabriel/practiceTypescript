const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const nextOrderId = 1;
const cashInRegister = 100;
const orderQuene = [];

const addNewPizza = (pizzaObj) => {
  menu.push(pizzaObj);
};

const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQuene.push(newOrder);
  return orderObj;
};

function completeOrder(orderId) {
  const order = orderQuene.find((order) => order.id === orderId);
  pizzaObj.status = "completed";
  return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 12 });

placeOrder("Chicken Bacon Ranch");
completeOrder("1");

console.log("Menu", menu);
