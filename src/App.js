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
    menuItems = menu.map(item => {
      return {
        header: item.header,
        id: item.id,
      }
    });
  }

  return (
    <React.Fragment>
      <Navbar/>
      <div className="app-content">
        <Sidebar menuItems={menuItems}/>
        <MainContent menuItems={[]}/>
      </div>
    </React.Fragment>
  );
}

export default App;
