import { useState } from "react";

const BtnQuantity = ({ quantity, setQuantity, inStock }) => {
  const plus = () => setQuantity((prev) => prev + 1);
  const minus = () => setQuantity((prev) => (quantity > 1 ? prev - 1 : prev));

  return (
    <div className="card-btn-quantity">
      <button onClick={minus} disabled={quantity <= 1}>
        −
      </button>
      <span>{quantity}</span>
      <button onClick={plus} disabled={quantity >= inStock}>
        +
      </button>
    </div>
  );
};

export default BtnQuantity;
