const getPriceString = (price, currencyRate) => {
  const euroPrice = price.toFixed(2);
  const dollarPrice = (price * currencyRate).toFixed(2);

  return `${euroPrice}€ / ${dollarPrice}$`
};

export default getPriceString;
