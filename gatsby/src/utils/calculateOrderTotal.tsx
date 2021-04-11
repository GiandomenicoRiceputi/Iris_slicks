import * as React from "react";
import calculatePizzaPrice from "./calculatePizzaPrice";

const claculateOrderTotal = (order, pizzas) => {
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
};

export default claculateOrderTotal;
