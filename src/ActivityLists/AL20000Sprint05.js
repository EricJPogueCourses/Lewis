import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint05 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 5: Functions, Encryption, Hashing, Artificial Intelligence, and Final Projects</h5>

<p>Welcome to sprint 5.</p>

<p>Let's start with what we hope to learn in sprint 5:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Understand Functions</li>
	<li>Understand Encryption and Hashing</li>
	<li>Explore Artificial Intelligence</li>
	<li>Create your initial Final Project Proposal</li>
</ul>

<p>Below is our sprint 5 activities list. </p>
<ol>
	<li>Verify sprint end date<NavLink to='/calendar/5'>[calendar]</NavLink></li>
	<li><em>Review sprint assignments</em></li>
	<li>Thoroughly read chapters 2 and 3 of Lubanovic and complete each of the exercises<a href='https://learning.oreilly.com/home/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Read Chapter 8 of Dale review the associated lecture <NavLink to='/activity/dale-chapter-08'>[video]</NavLink></li>
	<li><em>Submit all assignments include your Discussion, Lab, Quiz, and Reflection</em></li>
</ol>

</div>

	)
}