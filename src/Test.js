import React from 'react'

// Passing parameters reference: https://www.youtube.com/watch?v=nmbX2QL7ZJc
// Todo: Replace "&" with "&amp;" where appropriate. 

export class Test extends React.Component {
	render() {
		return (

<div>
<h4>Test Page</h4>
<h5>Summary: This page is intended to provide test scenarios and links</h5>

<p>Parameter ID: {this.props.match.params.id}</p>
<br />
<h4>Class Links:</h4>
<h5>Introduction to Computer Science</h5> 
<h6>20000-fall-2020-002:</h6>
{localAndGlobalLink('?cpsc=20000-fall-2020-002#/sprint-1')}

<h6>20000-fall-2020-003:</h6>
{localAndGlobalLink('?cpsc=20000-fall-2020-003#/sprint-1')}

<h5>Web &amp; Distributed Programming</h5>
<h6>24700-fall-2020-001:</h6>
{localAndGlobalLink('?cpsc=24700-fall-2020-001#/sprint-1')}

<h5>Software Engineering</h5>
<h6>44000-fall-2020-001:</h6>
{localAndGlobalLink('?cpsc=44000-fall-2020-001#/sprint-1')}

<br /><br />
<h4>Test Links:</h4>
<a href='https://www.lewis.education/#/test/me'>https://www.lewis.education/#/test/me</a><br />
<a href='http://localhost:3000/#/test/me'>http://localhost:3000/#/test/me</a>
<br /><br />
<a href='https://www.lewis.education/#/version'>https://www.lewis.education/#/version</a><br />
<a href='http://localhost:3000/#/version'>http://localhost:3000/#/version</a>
<br /><br />
<a href='https://www.lewis.education/version'>https://www.lewis.education/version</a><br />
<a href='http://localhost:3000/version'>http://localhost:3000/version</a>
<br /><br />
{localAndGlobalLink('?cpsc=20000-fall-2020-002#/sprint-1')}
{localAndGlobalLink('?cpsc=24700-fall-2020-001#/sprint-1')}
{localAndGlobalLink('?cpsc=25000-fall-2020-001#/sprint-1')}
{localAndGlobalLink('?cpsc=44000-fall-2020-001#/sprint-1')}

{localAndGlobalLink('?cpsc=44000-fall-2020-001#/welcome')}
{localAndGlobalLink('?cpsc=44000-fall-2020-001#/sprint-1')}
{localAndGlobalLink('?cpsc=44000-fall-2020-001&hide-nav=y#/sprint-1')}
{localAndGlobalLink('?cpsc=24700-fall-2020-001#/sprint-1')}
{localAndGlobalLink('#/calendar/0')}
{localAndGlobalLink('#/calendar/5')}
{localAndGlobalLink('')}
{localAndGlobalLink('#/home')}
{localAndGlobalLink('#/activity/sebesta-chapter-05')}
{localAndGlobalLink('#/activity/tools')}
{localAndGlobalLink('/cpsc=250000-fall-2020-001#/sprint-8')}
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
			{globalLink(link)}
			{localLink(link)}
			<br />
		</div>
	)
}
