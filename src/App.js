import React from 'react';
import './App.css';

function App() {
  fetch('https://pizza-shop-66ecb.firebaseio.com/test.json').then(res => {
    console.log(res);
  });


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
