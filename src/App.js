import React from 'react';
import logo from './logo.svg';
import './App.css';

import Credit from './credit'
import Test02 from './Test02'
import ShoppingList from './ShoppingList'
import OOPSprint01 from './OOPSprint01'
import OOPSprint02 from './OOPSprint02'

import Truck from './Truck'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
		<p>Yes but really?!?! Oh, yes.</p>
        <a
          className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"
        >
          Learn React
        </a>

		<Credit />
		<Test02 />
		<ShoppingList name="Eric Pogue"/>
		<h2>Object-Oriented Programming</h2>

      </header>
	  <body>
		<OOPSprint01 />
		<OOPSprint02 />
	  </body>
    </div>
  );
}

export default App;


