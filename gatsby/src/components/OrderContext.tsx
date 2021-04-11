import * as React from "react";
import { useState } from "react";
// Create order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // we need to stick sate in here
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]} className="Provider">
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
