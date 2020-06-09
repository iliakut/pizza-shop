import React from "react";
import "./orderItem.css"

const OrderItem = (
  {
    id,
    name,
    img,
    quantity,
    priceString,
    addToCart,
    removeFromCart,
    deleteFromCart,
  }) => {
  return (
    <div key={id} className="mb-3 mr-5 p-3 order-item">
      <div className="mb-3 image-order-wrap">
          <span>
            <strong>{name}</strong>
          </span>
        <img
          className="image-order border border-secondary rounded"
          src={img}
          alt={name}
        />
      </div>
      <div className="my-1">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => removeFromCart(id)}
        >
          <strong>
            -
          </strong>
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => addToCart(id)}
        >
          <strong>
            +
          </strong>
        </button>
      </div>
      <div className="my-1">
        <span className="mr-2">{priceString}</span>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => deleteFromCart(id)}
        >
          <strong>
            x
          </strong>
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
