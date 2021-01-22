import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint07 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 7: Security, JavaScript, and you setting the direction</h5>

<p>Welcome to sprint 7.</p>
<p>Welcome to sprint 7. Sprint 7 puts you in the driver’s seat. You get to decide if you would benefit more by focusing 
on developing more sophisticated terminal applications using Python, or if your energy would be better spent mastering 
Web development with HTML, CSS, and JavaScript. But never forget the legendary phrase:</p>

<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
“With great power there must also come great responsibility”<br /></div>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
-Peter Parker (aka Spider-Man)</div>

<br />
<p>What will you do with all that power... and responsibility?</p>
<p>Let's start with what we need to learn in sprint 7:</p>
<ul style={{listStyleType:'square'}}>
	<li>Understand Security</li>
	<li>Practice more sophisticated HTML, CSS, and JavaScript Website or Python Terminal development</li>
	<li>Begin work on Final Project</li> 
</ul>

<p>Below is our sprint 7 activities list. </p>
<ol>
	<li>Stay focused on dates by reviewing our course calendar<NavLink to='/calendar/7'>[link]</NavLink></li>	
	<li><em>Review sprint 7 assignments including Lab 7, Quiz 7, Discussion 7, and Reflection 7</em></li>
	<li>Determine if you will be focusing on HTML, CSS, and JavaScript Website or Python Terminal development in Sprints 7 and 8</li>
	<li>Start working on “Health Insurance Risk Calculator” for the Web<NavLink to='/activity/health-risk-calculator-web'>[link]</NavLink>
		or in Python<NavLink to='/activity/health-risk-calculator-python'>[link]</NavLink></li>	
	<li>Read Dale chapter 17 Security”<a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 17 lecture <NavLink to='/activity-dale/17'>[video]</NavLink></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Sign up for a Final Project presentation date &amp; time</li>
	<li>Complete “Health Insurance Risk Calculator”<NavLink to='/activity/health-risk-calculator-python'>[link]</NavLink><sup> ~12 hours</sup></li>
	<li><em>Submit all assignments including your Lab, Quiz, Discussion, and Reflection</em></li>
</ol>

<p>Let’s finish strong. How can I help?</p>
</div>

	)
}