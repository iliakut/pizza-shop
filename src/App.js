import React, {useEffect, useState} from 'react';
import './App.css';
import FirebaseMenuService from "./services/firebaseMenuService";

function App() {
  const menuService = new FirebaseMenuService();
  menuService.getMenu().then(res => console.log(res));


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit and save to reload. 123
          123
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
