import React from 'react'
import { NavLink } from 'react-router-dom'

export const al44000Sprint08 = () => {
	return (

<div>
	<h4>Software Engineering</h4>
	<h5>Sprint 8: Final project, Software Architecture, Performance, Releases, Reliability, and Security</h5>

	<p>Welcome to sprint 8. Stay focused on your final project. We will be learning about a couple other topics, but this
	sprint is all about your final project.</p>

	<p><em>It is important to remember that in our final sprint all assignments are due Thursday at 11:59pm CT. You do have a grace
	period until 6am CT the morning of Friday, March 6th to submit them.</em></p>

	<p>By the end of this sprint we will be able to:</p>
	<ul style={{ listStyleType:'square'}}>
		<li>Utilize your knowledge of Agile development and Saas to deliver a final project that you are proud of creating</li>
		<li>Understand Software Architecture including performance, releases, reliability, and security</li>
		<li>Enhance your understanding of application architecture, Object-Oriented Programming, and Databases</li>
	</ul>

	<p>Below is the list of activities</p>
 	<ol>
		<li><em style={{color:'red'}}>Stay laser focused on the due dates by reviewing our course calendar</em><NavLink to='/calendar/8'>[link]</NavLink></li>
		<li><em>Confirm your final project presentation date &amp; time</em></li>
		<li><em>Review our sprint 8 assignments that including discussion 8, quiz 8, lab 8, and reflection 8</em></li>
		<li>Focus your energy on delivering and testing the sprint 4 stories that your final project team has committed to delivering</li>
		<li>Complete a sprint 3 retrospective with your final project team</li>
		<li>Read Chapter 12 of Fox on Performance, Releases, Reliability, and Security</li>
		<li>Complete “Application Architectures, Object-Oriented Programming, and Databases - Part 2”<NavLink to='/activity-architecture/application-architecture-part2'>[video]</NavLink></li>
		<li><em>Submit all assignments including your Final Project, lab 8, quiz 8, and reflection 8
			<em style={{color:'red'}}> at least two hours prior to your scheduled Final Project presentation time</em></em></li>
	</ol>

	<p>Let's finish strong and deliver something that makes you proud.</p>
</div>

	)
}