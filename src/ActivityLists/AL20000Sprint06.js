import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint06 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 6: Networks, The Internet, Cloud Computing, and Updated Final Project Proposal</h5>

<p>Welcome to sprint 6.</p>

<p>Let's start with what we hope to learn in sprint 6:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Understand Networks</li>
	<li>Understand The Internet and World Wide Web</li>
	<li>Understand Cloud Computing</li>
	<li>Final Project Update</li>
</ul>

<p>Below is our sprint 6 activities list. </p>
<ol>
	<li>Verify sprint end date<NavLink to='/calendar/6'>[calendar]</NavLink></li>
	<li><em>Review sprint assignments</em></li>
	<li>Read Chapter 16 “The World Wide Web” of Dale on the review the associated lecture <NavLink to='/activity/dale-www'>[video]</NavLink></li>
	<li>Thoroughly read chapters 4 of Lubanovic and complete each of the exercises<a href='https://learning.oreilly.com/home/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>

	<li>Complete “<em>Todo:</em>Programming Assignment”<NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>

	<li>Read Chapter 9 of Dale review the associated lecture <NavLink to='/activity/dale-chapter-08'>[video]</NavLink></li>
	<li><em>Submit all assignments include your Discussion, Lab, Quiz, and Reflection</em></li>
</ol>

</div>

	)
}