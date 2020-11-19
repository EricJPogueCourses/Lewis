import React from 'react'
import { NavLink } from 'react-router-dom'

export const al44000Sprint07 = () => {
	return (

<div>
	<h4>Software Engineering</h4>
	<h5>Sprint 7: Design Patterns, Model-View-Controller, Application Architecture, and Final Project</h5>

	<p>Welcome to sprint 7. Or should I say sprint 3 of your final project? This sprint will see us focussing more on our final project while we also take a look
	at the important topic of Design Patterns.</p>

	<p>By the end of this sprint we will be able to:</p>
	<ul style={{listStyleType:'square'}}>
		<li>Utilize your knowledge of Agile development and Saas to deliver additional features for our final project</li>
		<li>Understand Design Patterns with a particular focus on the Model-View-Controller pattern</li>
		<li>Understand Application architecture particularly as it relates to Object-Oriented Programming and Databases</li>
	</ul>
	<p>Below is the list of activities that we will need to complete this sprint.</p>
	<ol>
		<li>Stay focused on the dates by reviewing our course calendar<NavLink to='/calendar/7'>[link]</NavLink></li>
		<li><em>Review sprint 7 assignments including discussion 7, quiz 7, lab 7, and reflection 7</em></li>
		<li>Focus your energy on delivering and testing the sprint 3 stories that your final project team has committed to delivering</li>
		<li>Complete a sprint 2 retrospective with your final project team</li>
		<li>Complete sprint 4 planning with your final project team</li>
		<li>Within Safari Books Online find “Design Patterns: Elements of Reusable Object-Oriented Software” by 
			Erich Gamma and read everything through chapter 1 paying close attention to the “Guide to Readers” and 
			“Model/View/Controller” sections</li>
		<li>Read Fox Chapter 11 on Design Patterns</li>
		<li>Complete “Application Architectures, Object-Oriented Programming, and Databases - Part 1”<NavLink to='/activity-architecture/application-architecture-part1'>[video]</NavLink></li>
		<li><em>Complete and submit all sprint 7 assignments including your initial discussion board post, responding
			back to one of your classmates’ discussion board 7 post, quiz 7, lab 7, and reflections 7</em></li>
	</ol>
</div>

	)
}