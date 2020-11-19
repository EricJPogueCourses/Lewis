import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint08 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 8: Final Project, Final Project, and more Final Project</h5>

<p>Welcome to sprint 8.</p>

<p>Let's start with what we hope to learn in sprint 8:</p>
<ul style={{listStyleType:'square'}}>
	<li>Independently deliver and present meaningful working software</li>
</ul>

<p>Below is our sprint 8 activities list. </p>
<ol>
	<li style={{color:'red'}}>Stay laser focused on the due dates by reviewing our course calendar<NavLink to='/calendar/8'>[link]</NavLink></li>
	<li><em>Confirm your final project presentation date &amp; time</em></li>
	<li><em>Review sprint 8 assignments including Lab 8, Quiz 8, Discussion 8, and Reflection 8</em></li>
	<li>Complete “<em>Todo:</em>Programming Assignment”<NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>
	<li>Complete Final Project version 2 (~16 hours)</li>
	<li><em>Submit all assignments including your Final Project, lab 8, quiz 8, and reflection 8
		<em style={{color:'red'}}> at least two hours prior to your scheduled Final Project presentation time</em></em></li>
	<li><em>Compete your final project review</em></li>
</ol>
</div>

	)
}