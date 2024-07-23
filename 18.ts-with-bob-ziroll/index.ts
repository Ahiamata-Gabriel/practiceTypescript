let cashInRegister = 100;
let nextOrder = 1;
let nextPizzaId = 1;

type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

const orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(newPizza);
  return newPizza;
}

function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}

addToArray<Pizza>(menu, {
  id: nextPizzaId++,
  name: "Chicken Beacon Ranch",
  price: 12,
});

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrder++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  return newOrder;
}

const completeOrder = (orderId: number): Order | undefined => {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
};

export const getPizzaDetail = (
  identifier: string | number
): Pizza | undefined => {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("Input num | string");
  }
};

addNewPizza({ name: "Chicken Beacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicey Sausage", price: 12 });

placeOrder("Chicken Bean Ranch");
completeOrder(1);
