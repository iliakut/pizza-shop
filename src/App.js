import React from 'react';
import useMenu from "./hooks/useMenu";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css"

function App() {
  const menu = useMenu();
  console.log(menu);
  let menuItems = [];
  if (menu) {
    menuItems = Object.keys(menu);
    console.log(menuItems);
  }

  return (
    <div className="App">
      <Navbar/>
      <div>
        <Sidebar/>
        <div className="main-content">
          <p>{menuItems}
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
