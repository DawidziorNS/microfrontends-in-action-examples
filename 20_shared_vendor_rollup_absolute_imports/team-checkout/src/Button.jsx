import React from "react";

const prices = {
  porsche: 66,
  fendt: 54,
  eicher: 58,
};

export default function ({ sku }) {
  const price = prices[sku];
  return (
    <button type="button" onClick={() => alert("Dziękujemy! ❤️")}>
      Kup za ${price} PLN
    </button>
  );
}
