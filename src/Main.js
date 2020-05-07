import './Main.css';

import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import HeaderNav from './HeaderNav'
import al25000Sprint01 from './ActivityLists/AL25000Sprint01'
import al25000Sprint02 from './ActivityLists/AL25000Sprint02'
import al25000Sprint03 from './ActivityLists/AL25000Sprint03'
import al25000Sprint04 from './ActivityLists/AL25000Sprint04'
import al25000Sprint05 from './ActivityLists/AL25000Sprint05'
import al25000Sprint06 from './ActivityLists/AL25000Sprint06'
import al25000Sprint07 from './ActivityLists/AL25000Sprint07'
import al25000Sprint08 from './ActivityLists/AL25000Sprint08'

import al44000Sprint01 from './ActivityLists/AL44000Sprint01'
import al44000Sprint02 from './ActivityLists/AL44000Sprint02'
import al44000Sprint03 from './ActivityLists/AL44000Sprint03'
import al44000Sprint04 from './ActivityLists/AL44000Sprint04'
import al44000Sprint05 from './ActivityLists/AL44000Sprint05'
import al44000Sprint06 from './ActivityLists/AL44000Sprint06'
import al44000Sprint07 from './ActivityLists/AL44000Sprint07'
import al44000Sprint08 from './ActivityLists/AL44000Sprint08'

import { Credits } from './Credits'
import { Tools } from './Tools'
import { SuccessfulProgrammer } from './SuccessfulProgrammer'
import { Calendar } from './Calendar'

class Main extends Component {
	render() {
		return (

<div>
	<HeaderNav course="25000" />
	<HashRouter>
		<div className="Main">
			<Route exact path="/" component={Calendar}/>
			<Route path="/25000-sprint01" component={al25000Sprint01}/>
			<Route path="/25000-sprint02" component={al25000Sprint02}/>
			<Route path="/25000-sprint03" component={al25000Sprint03}/>
			<Route path="/25000-sprint04" component={al25000Sprint04}/>
			<Route path="/25000-sprint05" component={al25000Sprint05}/>
			<Route path="/25000-sprint06" component={al25000Sprint06}/>
			<Route path="/25000-sprint07" component={al25000Sprint07}/>
			<Route path="/25000-sprint08" component={al25000Sprint08}/>

			<Route path="/44000-sprint01" component={al44000Sprint01}/>
			<Route path="/44000-sprint02" component={al44000Sprint02}/>
			<Route path="/44000-sprint03" component={al44000Sprint03}/>
			<Route path="/44000-sprint04" component={al44000Sprint04}/>
			<Route path="/44000-sprint05" component={al44000Sprint05}/>
			<Route path="/44000-sprint06" component={al44000Sprint06}/>
			<Route path="/44000-sprint07" component={al44000Sprint07}/>
			<Route path="/44000-sprint08" component={al44000Sprint08}/>

			<Route path="/tools" component={Tools}/>
			<Route path="/successful-programmer" component={SuccessfulProgrammer}/>
			<Route path="/credits" component={Credits}/>
			<Route path="/calendar" component={Calendar}/>
		</div>
	</HashRouter>
</div>

		);
	}
}

export default Main;