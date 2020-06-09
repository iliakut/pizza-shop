import React, {useState} from "react";

const OrderHistory = ({orderHistory, setCartItems}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDetailsClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen)
  };

  const HistoryItems = orderHistory.map(item => {
    const timeStamp = Object.keys(item)[0];
    const date = new Date(Number(timeStamp));
    const dateString =
      `${date.getDate()}.${date.getMonth()}.${date.getUTCFullYear()}
       ${date.getHours()}:${date.getMinutes()}`;

    return (
      <button
        key={timeStamp}
        className="btn btn-outline-info mb-1 d-block"
        onClick={() =>setCartItems(item[timeStamp])}
      >
        {dateString}
      </button>
    )
  });

  return (
    <div className="mb-3">
      <span className="text-info">You can repeat your order from the order history with one click.</span>
      <details open={isOpen} onClick={(event) => handleDetailsClick(event)}>
        <summary>
          <span className="text-info">Order history</span>
        </summary>
        <div className="rounded mt-2 px-2 pb-2">
          {
            HistoryItems
          }
        </div>
      </details>
    </div>
  );
};

export default OrderHistory;
