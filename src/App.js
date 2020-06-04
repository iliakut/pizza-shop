import React from 'react';
import useMenu from "./hooks/useMenu";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css"
import MainContent from "./components/mainContent/mainContent";

function App() {
  const menu = useMenu();
  console.log(menu);
  let menuItems = [];
  if (menu) {
    menuItems = Object.keys(menu);
    console.log(menuItems);
  }

  return (
    <React.Fragment>
      <Navbar/>
      <div className="app-content">
        <Sidebar/>
        <MainContent menuItems={menuItems}/>
      </div>
    </React.Fragment>
  );
}

export default App;
