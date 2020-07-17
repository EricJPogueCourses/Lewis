import './Main.css';

import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import HeaderNav from './HeaderNav'


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

import al20000Sprint01 from './ActivityLists/AL20000Sprint01'
import al20000Sprint02 from './ActivityLists/AL20000Sprint02'
import al20000Sprint03 from './ActivityLists/AL20000Sprint03'
import al20000Sprint04 from './ActivityLists/AL20000Sprint04'
import al20000Sprint05 from './ActivityLists/AL20000Sprint05'
import al20000Sprint06 from './ActivityLists/AL20000Sprint06'
import al20000Sprint07 from './ActivityLists/AL20000Sprint07'
import al20000Sprint08 from './ActivityLists/AL20000Sprint08'
import { AL20000Video } from './ActivityLists/AL20000Video'

import al25000Sprint01 from './ActivityLists/AL25000Sprint01'
import al25000Sprint02 from './ActivityLists/AL25000Sprint02'
import al25000Sprint03 from './ActivityLists/AL25000Sprint03'
import al25000Sprint04 from './ActivityLists/AL25000Sprint04'
import al25000Sprint05 from './ActivityLists/AL25000Sprint05'
import al25000Sprint06 from './ActivityLists/AL25000Sprint06'
import al25000Sprint07 from './ActivityLists/AL25000Sprint07'
import al25000Sprint08 from './ActivityLists/AL25000Sprint08'

import al44000Welcome from './ActivityLists/AL44000Welcome'
import al44000Sprint01 from './ActivityLists/AL44000Sprint01'
import al44000Sprint02 from './ActivityLists/AL44000Sprint02'
import al44000Sprint03 from './ActivityLists/AL44000Sprint03'
import al44000Sprint04 from './ActivityLists/AL44000Sprint04'
import al44000Sprint05 from './ActivityLists/AL44000Sprint05'
import al44000Sprint06 from './ActivityLists/AL44000Sprint06'
import al44000Sprint07 from './ActivityLists/AL44000Sprint07'
import al44000Sprint08 from './ActivityLists/AL44000Sprint08'

import version from './Version'

import { Credits } from './Credits'
import { tools } from './ToolsOfTheTrade'
import { SuccessfulProgrammer } from './SuccessfulProgrammer'

import infoEricPogue from './InfoEricPogue'
import { Test } from './Test'


class Main extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showNav: this.getShowNavFlagFromURL(),
			course: this.getCourseFromURL(),
			calendar: this.getCalendarFromURL()
		}
	}

	getShowNavFlagFromURL = () => {
		// The 'hide-nav' URL parameter must be before the React routing parameters.
		// For example: http://localhost:3000/?hide-nav=y&#/44000-sprint03
		// Does not work: http://localhost:3000/#/44000-sprint03&hide-nav=y

		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const hideNav = urlParams.get('hide-nav')
		if (hideNav === 'y') {
			return false /* false to show the nav bar */;
		}

		return true /* true to hide the nav bar */;
	}

	getCourseFromURL = () => {
		// BugBug: Need to clean up (and move) all of the test URL examples to reflect new parameter passing. 
		// BugBug: Remove the call and replace with call to URLParams
		// The 'course-id' URL parameter must be before any React routing parameters. 
		// Example 01: http://localhost:3000/?hide-nav=y&course=44000&#/44000-sprint03
		// Example 02: http://localhost:3000/?course=44000&calendar=2020-08-31-16#/44000-sprint05
		// Example 03: http://localhost:3000/?course=44000&calendar=2020-08-31-16
		// Example 04: http://localhost:3000/?course=25000&calendar=2020-08-31-16
		// Example 05: http://localhost:3000/
		// Example 06: http://localhost:3000/?course=20000&calendar=2020-08-31-16#/20000-sprint01
		// Example 07: http://localhost:3000/?course=20000
		// Example 08: http://localhost:3000/?hide-nav=y&course=44000&#/44000-welcome
		// Example 09: http://localhost:3000/?course=20000&#/20000-sprint01
		// Example 10: http://localhost:3000/#/test/10
		// Example 11: http://localhost:3000/?hide-nav=y#/sprint-calendar/2020-08-31-16-01
		// Example 12: http://localhost:3000/#/sprint-calendar/2020-08-31-16-01

		// Example 09: http://localhost:3000/?course=25000&calendar=2020-08-31-16#/25000-sprint01

		// Example 1b: https://www.lewis.education/?hide-nav=y&course=44000&#/44000-sprint03
		// Example 2b: https://www.lewis.education/?course=44000&#/44000-sprint05 
		// Example 3b: https://www.lewis.education/?course=44000
		// Example 4b: https://www.lewis.education/?course=25000
		// Example 5b: https://www.lewis.education/
		// Example 6b: https://www.lewis.education/ 
		// Example 7b: https://www.lewis.education/?course=25000
		// Example 8b: https://www.lewis.education/?hide-nav=y&course=44000&#/44000-welcome
		// Example 9b: https://www.lewis.education/?course=20000&#/20000-sprint01

		const defaultCourseNumber = 25000 // Default to cpsc-25000 which is OOP
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		let course = parseInt(urlParams.get('course'), 10);
		if (isNaN(course)) {
			course = defaultCourseNumber; 
		}
		return course
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
				<HeaderNav show={this.state.showNav} course={this.state.course} calendar={this.state.calendar}/>
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

						<Route path="/20000-sprint01" component={al20000Sprint01}/>
						<Route path="/20000-sprint02" component={al20000Sprint02}/>						
						<Route path="/20000-sprint03" component={al20000Sprint03}/>
						<Route path="/20000-sprint04" component={al20000Sprint04}/>
						<Route path="/20000-sprint05" component={al20000Sprint05}/>
						<Route path="/20000-sprint06" component={al20000Sprint06}/>
						<Route path="/20000-sprint07" component={al20000Sprint07}/>
						<Route path="/20000-sprint08" component={al20000Sprint08}/>
						<Route path="/20000-video/:ref" component={AL20000Video}/>

						<Route path="/25000-sprint01" component={al25000Sprint01}/>
						<Route path="/25000-sprint02" component={al25000Sprint02}/>
						<Route path="/25000-sprint03" component={al25000Sprint03}/>
						<Route path="/25000-sprint04" component={al25000Sprint04}/>
						<Route path="/25000-sprint05" component={al25000Sprint05}/>
						<Route path="/25000-sprint06" component={al25000Sprint06}/>
						<Route path="/25000-sprint07" component={al25000Sprint07}/>
						<Route path="/25000-sprint08" component={al25000Sprint08}/>

						<Route path="/44000-welcome" component={al44000Welcome}/>
						<Route path="/44000-sprint01" component={al44000Sprint01}/>
						<Route path="/44000-sprint02" component={al44000Sprint02}/>
						<Route path="/44000-sprint03" component={al44000Sprint03}/>
						<Route path="/44000-sprint04" component={al44000Sprint04}/>
						<Route path="/44000-sprint05" component={al44000Sprint05}/>
						<Route path="/44000-sprint06" component={al44000Sprint06}/>
						<Route path="/44000-sprint07" component={al44000Sprint07}/>
						<Route path="/44000-sprint08" component={al44000Sprint08}/>

						<Route path="/version" component={version}/>
						<Route path="/tools" component={tools}/>
						<Route path="/successful-programmer" component={SuccessfulProgrammer}/>
						<Route path="/credits" component={Credits}/>

						<Route path="/info" component={infoEricPogue}/>

						<Route path={"/test/:id"} component={Test}/>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default Main;