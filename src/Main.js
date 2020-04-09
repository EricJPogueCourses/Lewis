import './Main.css';

import React, { Component } from "react";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

import OOPSprint01 from './OOPSprint01'
import OOPSprint02 from './OOPSprint02'

class Main extends Component {
	render() {
		return (

<HashRouter>
<div>
	<div className="Header">
		<NavLink to="/sprint01">Sprint 1</NavLink>
		<NavLink to="/sprint02">Sprint 2</NavLink>
	</div>
	<div className="Main">
		<Route path="/sprint01" component={OOPSprint01}/>
		<Route path="/sprint02" component={OOPSprint02}/>
	</div>
</div>
</HashRouter>

		);
	}
}

export default Main;