import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint07 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 7: Software Development Lifecycle, Security, JavaScript, and Final Projects</h5>

<p>Welcome to sprint 7.</p>

<p>Let's start with what we hope to learn in sprint 7:</p>
<ul style={{listStyleType:'square'}}>
	<li>Understand Software Development</li>
	<li>Understand Security</li>
	<li>Understand Interactive Websites with JavaScript</li>
	<li>Begin work on Final Project</li> 
</ul>

<p>Below is our sprint 7 activities list. </p>
<ol>
	<li>Verify sprint end date<NavLink to='/calendar/7'>[calendar]</NavLink></li>
	<li><em>Review sprint assignments</em></li>
	<li>Read Chapter 17 “Computer Security” of Dale on the review the associated lecture <NavLink to='/activity/dale-www'>[video]</NavLink></li>
	<li>Thoroughly read chapter 5 of Lubanovic and complete each of the exercises<a href='https://learning.oreilly.com/home/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>

	<li>Complete “<em>Todo:</em>Programming Assignment”<NavLink to='/activity/health-risk-calculator'>[link]</NavLink></li>
	<li>Sign up for a final project review time</li>

	<li>Read Chapter 10 of Dale review the associated lecture <NavLink to='/activity/dale-chapter-08'>[video]</NavLink></li>
	<li><em>Submit all assignments include your Discussion, Lab, Quiz, and Reflection</em></li>
</ol>

</div>

	)
}