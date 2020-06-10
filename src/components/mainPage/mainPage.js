import React from "react";
import {Link} from "react-router-dom";
import Spinner from "../../UI/spinner/spinner";

const MainPage = ({menuItems, isError}) => {
  const MenuLinks = menuItems.map(item => {
    return (
      <Link
        className="btn btn-link"
        to={`/menu/${item.header}`}
        key={item.id}>
        {item.header}
      </Link>
    )
  });

  const Alert = (
    <div className="alert alert-danger m-3">
      Something went wrong. Try again later
    </div>
  );

  return (
    <div className="jumbotron bg-transparent">
      <h1>Welcome to Pizza-Shop!</h1>
      <h4 className="text-muted">Original italian pizzas with fresh dough and carefully selected natural ingredients.</h4>
      <hr className="my-4"/>
      <h4>In our restaurants pizzas are baked in a wood brick oven.</h4>
      <h5>Our menu:</h5>
      {
        MenuLinks.length
        ? <h5>{MenuLinks}</h5>
        : <Spinner/>
      }
      {
        isError
        ? Alert
        : null
      }
    </div>
  );
};

export default MainPage;
