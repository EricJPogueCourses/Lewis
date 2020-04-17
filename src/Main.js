import './Main.css';

import React, { Component } from "react";
import {
	Route,
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
import Tools from './Tools'
import SuccessfulProgrammer from './SuccessfulProgrammer'
import Calendar from './Calendar'
import HeaderNav from './HeaderNav'


class Main extends Component {
	render() {
		return (

<HashRouter>
<div>

	<HeaderNav showNav="yes"/>

	<div className="Main">
		<Route exact path="/" component={OOPSprint01}/>
		<Route path="/sprint01" component={OOPSprint01}/>
		<Route path="/sprint02" component={OOPSprint02}/>
		<Route path="/sprint03" component={OOPSprint03}/>
		<Route path="/sprint04" component={OOPSprint04}/>
		<Route path="/sprint05" component={OOPSprint05}/>
		<Route path="/sprint06" component={OOPSprint06}/>
		<Route path="/sprint07" component={OOPSprint07}/>
		<Route path="/sprint08" component={OOPSprint08}/>
		<Route path="/tools" component={Tools}/>
		<Route path="/successful-programmer" component={SuccessfulProgrammer}/>
		<Route path="/credits" component={Credits}/>
		<Route path="/calendar" component={Calendar}/>
	</div>
	
</div>
</HashRouter>

		);
	}
}

export default Main;