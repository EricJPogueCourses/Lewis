import './Main.css';

import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import HeaderNav from './HeaderNav'
import al20000Sprint01 from './ActivityLists/AL20000Sprint01'
import al20000Sprint02 from './ActivityLists/AL20000Sprint02'
import al20000Sprint03 from './ActivityLists/AL20000Sprint03'
import al20000Sprint04 from './ActivityLists/AL20000Sprint04'
import al20000Sprint05 from './ActivityLists/AL20000Sprint05'
import al20000Sprint06 from './ActivityLists/AL20000Sprint06'
import al20000Sprint07 from './ActivityLists/AL20000Sprint07'
import al20000Sprint08 from './ActivityLists/AL20000Sprint08'

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

import { ALVideo } from './ActivityLists/ALVideo'

import version from './Version'

import { Credits } from './Credits'
import { tools } from './ToolsOfTheTrade'
import { SuccessfulProgrammer } from './SuccessfulProgrammer'
import { Calendar } from './Calendar'
import infoEricPogue from './InfoEricPogue'

import { Test } from './Test'


class Main extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showNav: this.getShowNavFlagFromURL(),
			course: this.getCourseFromURL(),
			calendar: ""
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
		// The 'course-id' URL parameter must be before any React routing parameters. 
		// Example 1: http://localhost:3000/?hide-nav=y&course=44000&#/44000-sprint03
		// Example 2: http://localhost:3000/?course=44000&#/44000-sprint05
		// Example 3: http://localhost:3000/?course=44000
		// Example 4: http://localhost:3000/?course=25000
		// Example 5: http://localhost:3000/
		// Example 6: http://localhost:3000/?course=what 
		// Example 7: http://localhost:3000/?course=20000
		// Example 8: http://localhost:3000/?hide-nav=y&course=44000&#/44000-welcome
		// Example 9: http://localhost:3000/?course=20000&#/20000-sprint01

		// Example 1b: https://www.lewis.education/?hide-nav=y&course=44000&#/44000-sprint03
		// Example 2b: https://www.lewis.education/?course=44000&#/44000-sprint05 
		// Example 3b: https://www.lewis.education/?course=44000
		// Example 4b: https://www.lewis.education/?course=25000
		// Example 5b: https://www.lewis.education/
		// Example 6b: https://www.lewis.education/ 
		// Example 7b: https://www.lewis.education/?course=25000
		// Example 8b: https://www.lewis.education//?hide-nav=y&course=44000&#/44000-welcome
		// Example 9b: https://www.lewis.education/?course=20000&#/20000-sprint01

		const defaultCourseNumber = 25000 /* default to OOP (cpsc-25000) */ ;
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		let course = parseInt(urlParams.get('course'), 10);
		if (isNaN(course)) {
			course = defaultCourseNumber; 
		}
		return course
	}

	render() {
		return (
			<div>
				<HeaderNav show={this.state.showNav} course={this.state.course} />
				<HashRouter>
					<div className="Main">
						<Route exact path="/" component={Calendar}/>
						<Route path="/20000-sprint01" component={al20000Sprint01}/>
						<Route path="/20000-sprint02" component={al20000Sprint02}/>						
						<Route path="/20000-sprint03" component={al20000Sprint03}/>
						<Route path="/20000-sprint04" component={al20000Sprint04}/>
						<Route path="/20000-sprint05" component={al20000Sprint05}/>
						<Route path="/20000-sprint06" component={al20000Sprint06}/>
						<Route path="/20000-sprint07" component={al20000Sprint07}/>
						<Route path="/20000-sprint08" component={al20000Sprint08}/>

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

						<Route path="/video/:url" component={ALVideo}/>

						<Route path="/version" component={version}/>
						<Route path="/tools" component={tools}/>
						<Route path="/successful-programmer" component={SuccessfulProgrammer}/>
						<Route path="/credits" component={Credits}/>
						<Route path="/calendar" component={Calendar}/>
						<Route path="/info" component={infoEricPogue}/>

						<Route path={"/test/:id"} component={Test}/>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default Main;