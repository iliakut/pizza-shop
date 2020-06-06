import React, {useState} from 'react';
import useMenu from "./hooks/useMenu";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css"
import MainContent from "./components/mainContent/mainContent";

function App() {
  const [openMenuId, setOpenMenuId] = useState(1);
  const menu = useMenu();
  let menuItems = [];
  let currentMenuItem = {};

  if (menu) {
    menuItems = menu.map(item => {
      return {
        header: item.header,
        id: item.id,
      }
    });

    currentMenuItem = menu.find(item => {
      return item.id === openMenuId;
    });
  }

  return (
    <React.Fragment>
      <Navbar/>
      <div className="d-flex justify-content-between">
        <div className="flex-shrink-1">
          <Sidebar menuItems={menuItems}/>
        </div>
        <div>
          <MainContent menuItem={currentMenuItem}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
