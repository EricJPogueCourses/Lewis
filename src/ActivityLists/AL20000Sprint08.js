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
	<li>Independently deliver meaningful working software</li>
</ul>

<p>Below is our sprint 8 activities list. </p>
<ol>
	<li style={{color: 'red'}}>Verify due dates<NavLink to='/calendar/8'>[calendar]</NavLink></li>
	<li><em>Review sprint assignments</em></li>
	<li>Review Discussion 8 but no post is required</li>
	<li>Complete “<em>Todo:</em>Programming Assignment”<NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>
	<li>Complete your final project review</li>
	<li><em>Submit all assignments include your Lab, Quiz, and Reflection</em></li>
</ol>

</div>

	)
}