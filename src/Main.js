import './Main.css';

import React, { Component } from "react";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

import OOPSprint01 from './OOPSprint01'
import OOPSprint02 from './OOPSprint02'
import OOPSprint03 from './OOPSprint03'
import OOPSprint04 from './OOPSprint04'
import OOPSprint05 from './OOPSprint05'
import OOPSprint06 from './OOPSprint06'
import OOPSprint07 from './OOPSprint07'
import OOPSprint08 from './OOPSprint08'
import Credits from './Credits'

class Main extends Component {
	render() {
		return (

<HashRouter>
<div>
	<div className="Header">
		<NavLink to="/sprint01">Sprint 1</NavLink>-
		<NavLink to="/sprint02">Sprint 2</NavLink>-
		<NavLink to="/sprint03">Sprint 3</NavLink>-
		<NavLink to="/sprint04">Sprint 4</NavLink>-
		<NavLink to="/sprint05">Sprint 5</NavLink>-
		<NavLink to="/sprint06">Sprint 6</NavLink>-
		<NavLink to="/sprint07">Sprint 7</NavLink>-
		<NavLink to="/sprint08">Sprint 8</NavLink>-
		<NavLink to="/credits">Credits</NavLink>
	</div>
	<div className="Main">
		<Route path="/sprint01" component={OOPSprint01}/>
		<Route path="/sprint02" component={OOPSprint02}/>
		<Route path="/sprint03" component={OOPSprint03}/>
		<Route path="/sprint04" component={OOPSprint04}/>
		<Route path="/sprint05" component={OOPSprint05}/>
		<Route path="/sprint06" component={OOPSprint06}/>
		<Route path="/sprint07" component={OOPSprint07}/>
		<Route path="/sprint08" component={OOPSprint08}/>
		<Route path="/credits" component={Credits}/>
	</div>
</div>
</HashRouter>

		);
	}
}

export default Main;