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
import SESprint01 from './SESprint01'
import SESprint02 from './SESprint02'
import SESprint03 from './SESprint03'
import SESprint04 from './SESprint04'
import SESprint05 from './SESprint05'
import SESprint06 from './SESprint06'
import SESprint07 from './SESprint07'
import SESprint08 from './SESprint08'

class Main extends Component {
	render() {
		return (

<HashRouter>
<div>

	<HeaderNav />

	<div className="Main">
		<Route exact path="/" component={OOPSprint01}/>
		<Route path="/oop-sprint01" component={OOPSprint01}/>
		<Route path="/oop-sprint02" component={OOPSprint02}/>
		<Route path="/oop-sprint03" component={OOPSprint03}/>
		<Route path="/oop-sprint04" component={OOPSprint04}/>
		<Route path="/oop-sprint05" component={OOPSprint05}/>
		<Route path="/oop-sprint06" component={OOPSprint06}/>
		<Route path="/oop-sprint07" component={OOPSprint07}/>
		<Route path="/oop-sprint08" component={OOPSprint08}/>

		<Route path="/se-sprint01" component={SESprint01}/>
		<Route path="/se-sprint02" component={SESprint02}/>
		<Route path="/se-sprint03" component={SESprint03}/>
		<Route path="/se-sprint04" component={SESprint04}/>
		<Route path="/se-sprint05" component={SESprint05}/>
		<Route path="/se-sprint06" component={SESprint06}/>
		<Route path="/se-sprint07" component={SESprint07}/>
		<Route path="/se-sprint08" component={SESprint08}/>

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