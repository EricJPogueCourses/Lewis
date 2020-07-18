import './Main.css';

import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import { HeaderNavigation } from './HeaderNavigation'
import { Welcome } from './Welcome'
import { SprintCalendar } from './SprintCalendar'
import { Sprint01 } from './Sprint01'
import { Sprint02 } from './Sprint02'
import { Sprint03 } from './Sprint03'
import { Sprint04 } from './Sprint04'
import { Sprint05 } from './Sprint05'
import { Sprint06 } from './Sprint06'
import { Sprint07 } from './Sprint07'
import { Sprint08 } from './Sprint08'
import { Version } from './Version'
import { Credits } from './Credits'
import { Tools } from './ToolsOfTheTrade'
import { SuccessfulProgrammer } from './SuccessfulProgrammer'
import { InfoEricPogue } from './InfoEricPogue'
import { Test } from './Test'

import * as URLParameters from './URLParameters'

class Main extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showNav: URLParameters.showHeaderNavigation(), 
			course: URLParameters.courseNumber(), 
			calendar: this.getCalendarFromURL()
		}
	}

	getCalendarFromURL = () =>  {
		// The 'calendar' URL parameter must be before the React routing parameters.
		// For example: http://localhost:3000/?course=20000&calendar=2020-08-31-16#/20000-sprint01
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const calendar = urlParams.get('calendar');
		return calendar
	}

	render() {
		return (
			<div>
				<HeaderNavigation show={this.state.showNav} course={this.state.course} calendar={this.state.calendar}/>
				<HashRouter>
					<div className="Main">
						<Route exact path="/" component={Welcome}/>
						<Route exact path="/home" component={Welcome}/>

						<Route path="/welcome" component={Welcome}/>
						<Route path="/sprint-1" component={Sprint01}/>
						<Route path="/sprint-2" component={Sprint02}/>
						<Route path="/sprint-3" component={Sprint03}/>
						<Route path="/sprint-4" component={Sprint04}/>
						<Route path="/sprint-5" component={Sprint05}/>
						<Route path="/sprint-6" component={Sprint06}/>
						<Route path="/sprint-7" component={Sprint07}/>
						<Route path="/sprint-8" component={Sprint08}/>
						<Route path="/sprint-calendar/:reference" component={SprintCalendar}/>
						<Route path="/version" component={Version}/>
						<Route path="/tools" component={Tools}/>
						<Route path="/successful-programmer" component={SuccessfulProgrammer}/>
						<Route path="/credits" component={Credits}/>
						<Route path="/info" component={InfoEricPogue}/>

						<Route path={"/test/:id"} component={Test}/>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default Main;