import React from 'react';
import logo from './logo.svg';
import './App.css';

import OOPSprint00 from './OOPSprint00'
import OOPSprint01 from './OOPSprint01'
import OOPSprint02 from './OOPSprint02'
import Credit from './credit'
import Test02 from './Test02'
import ShoppingList from './ShoppingList'

function App() {
	return (

<div className="App">
	<header className="App-header">

	</header>
	<body>
		<OOPSprint01 />
		<OOPSprint02 />
		<img src={logo} className="App-logo" alt="logo" />
		<OOPSprint00 />
		<ShoppingList name="Eric Pogue"/>
		<Credit />
		<Test02 />
	</body>
</div>

	);
}

export default App;


