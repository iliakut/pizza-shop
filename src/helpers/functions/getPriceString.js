const getPriceString = (price, currencyRate =  1.13) => {
  const euroPrice = price.toFixed(2);
  const dollarPrice = (price * currencyRate).toFixed(2);

  return `${euroPrice}€ / ${dollarPrice}$`
};

export default getPriceString;
