import React, {useState} from "react";

const OrderHistory = ({orderHistory}) => {
  const [isOpen, setIsOpen] = useState(false);
  const historyKeys = Object.keys(orderHistory);

  const handleDetailsClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen)
  };

  const selectHistory = () => {
  };

  const HistoryItems = historyKeys.map(key => {
    const date = Date(key);
    return (
      <button
        key={key}
        className="btn btn-outline-info"
        onClick={() => selectHistory(orderHistory[key])}
      >
        {date}
      </button>
    )
  });

  return (
    <div>
      <details open={isOpen} onClick={(event) => handleDetailsClick(event)}>
        <summary className="">
          <span className="text-info">You can select from your order history</span>
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
