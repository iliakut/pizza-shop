import React, {useState} from 'react';
import useMenu from "./hooks/useMenu";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css"
import MainContent from "./components/mainContent/mainContent";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import MainPage from "./components/mainPage/mainPage";
import OrderPage from "./components/orderPage/orderPage";
import calcPrice from "./helpers/functions/calcPrice";
import getPriceString from "./helpers/functions/getPriceString";
import ConfirmPage from "./components/confirmPage/confirmPage";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', {count: 0});
  console.log(cartItems);
  const menu = useMenu();
  let menuItems = [];
  let flatMenu = [];
  const currencyRate = 1.13;

  if (menu) {
    menuItems = menu.map(item => {
      return {
        header: item.header,
        id: item.id,
      }
    });

    const keys = Object.keys(menu);
    flatMenu = keys.flatMap(key => {
      return menu[key].items;
    })
  }

  const mainPrice = calcPrice(cartItems, flatMenu);
  const pricesString = getPriceString(mainPrice, currencyRate);

  const getCurrentMenuItem = (name) => {
    if (menu) {
      return menu.find(item => {
        return item.header.toLowerCase() === name.toLowerCase();
      });
    }
  };

  const addToCart = (positionId) => {
    setCartItems(cartItems => {
      const newCartItems = {...cartItems};

      if (newCartItems[positionId]) {
        newCartItems[positionId] = newCartItems[positionId] + 1;
        newCartItems.count = newCartItems.count + 1;
      } else {
        newCartItems[positionId] = 1;
        newCartItems.count = newCartItems.count + 1;
      }

      return newCartItems;
    })
  };

  const removeFromCart = (positionId) => {
    setCartItems(cartItems => {
      const newCartItems = {...cartItems};
      if (newCartItems.count === 0) {
        return
      }

      newCartItems.count = newCartItems.count - 1;
      newCartItems[positionId] = newCartItems[positionId] - 1;

      if (newCartItems[positionId] === 0) {
         delete newCartItems[positionId]
      }

      return newCartItems;
    })
  };

  const deleteFromCart = (positionId) => {
    setCartItems(cartItems => {
      const newCartItems = {...cartItems};

      if (newCartItems[positionId]) {
        const quantity = newCartItems[positionId];
        newCartItems.count = newCartItems.count - quantity;
        delete newCartItems[positionId];
      }

      return newCartItems;
    })
  };

  const clearCart = () => {
    setCartItems({count: 0});
  };


  return (
    <Router>
      <React.Fragment>
        <Navbar cartItems={cartItems} pricesString={pricesString}/>
        <div className="d-flex justify-content-start">
          <div className="flex-shrink-1 sidebar-wrap">
            <Sidebar menuItems={menuItems}/>
          </div>
          <div className="main-content-wrap w-100">
            <Switch>
              <Route path={`/`} exact render={() => {
                return <MainPage menuItems={menuItems}/>
              }}/>
              <Route path={`/order`} render={() => {
                return <OrderPage
                  cartItems={cartItems}
                  flatMenu={flatMenu}
                  currencyRate={currencyRate}
                  pricesString={pricesString}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  deleteFromCart={deleteFromCart}
                />
              }}/>
              <Route path={`/menu/:menuHeader`} render={({match}) => {
                const {menuHeader}  = match.params;
                const menuItem = getCurrentMenuItem(menuHeader);
                if (menuItem) {
                  return <MainContent
                    menuItem={menuItem}
                    addToCart={addToCart}
                    currencyRate={currencyRate}
                  />
                } else if (menu) {
                  return <Redirect to={`/`}/>
                }
              }}/>
              <Route path={`/confirm`} render={() => {
                return <ConfirmPage
                  price={mainPrice}
                  clearCart={clearCart}/>
              }}/>
              <Redirect to={`/`}/>
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
