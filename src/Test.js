import React from 'react'

// Passing parameters reference: https://www.youtube.com/watch?v=nmbX2QL7ZJc

export class Test extends React.Component {
	render() {
		return (

<div>
	
<h4>Test Page</h4>
<h5>Summary: This page is intended to provide test scenarios and links</h5>

<p>Parameter ID: {this.props.match.params.id}</p>
<br />
<p>Test Links:</p>
<a href='http://localhost:3000/#/test/me'>http://localhost:3000/#/test/me</a><br />
<a href='https://www.lewis.education/#/test/me'>https://www.lewis.education/#/test/me</a>
<br /><br />
{localAndGlobalLink('?cpsc=44000-fall-2020-002#/welcome')}
{localAndGlobalLink('?cpsc=44000-fall-2020-002#/sprint-1')}
{localAndGlobalLink('?cpsc=44000-fall-2020-002&hide-nav=y#/sprint-1')}
{localAndGlobalLink('?cpsc=24700-fall-2020-001#/sprint-1')}
{localAndGlobalLink('#/calendar/0')}
{localAndGlobalLink('#/calendar/5')}
{localAndGlobalLink('')}
{localAndGlobalLink('#/home')}
{localAndGlobalLink('#/activity/sebesta-chapter-05')}
{localAndGlobalLink('#/activity/tools')}

</div>
		)
	}
}

const localLink = (link) => {
	return (<div><a href= {'http://localhost:3000/'+link}>{'http://localhost:3000/'+link}</a><br /></div>)
}

const globalLink = (link) => {
	return (<div><a href= {'https://www.lewis.education/'+link}>{'https://www.lewis.education/'+link}</a><br /></div>)
}

const localAndGlobalLink = (link) => {
	return (
		<div>
			{localLink(link)}
			{globalLink(link)}
			<br />
		</div>
	)
}

/* Below are a series of test URL that can be utilized for local and production testing:


			// BugBug: Need to clean up (and move) all of the test URL examples to reflect new parameter passing. 

		// The 'course-id' URL parameter must be before any React routing parameters. 

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
*/
