import * as React from "react";

const formatter = Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

const formatMoney = (cents) => {
  return formatter.format(cents / 100);
};

export default formatMoney;
