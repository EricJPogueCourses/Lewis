import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint06 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 6: Networks, The Internet, Cloud Computing, and Updated Final Project Proposal</h5>

<p>Welcome to sprint 6. Sprint 6 is going to see you taking control and being more proactive exploring how to learn 
more about a topic. The new topic this sprint is JavaScript. We will utilize JavaScript along with HTML and CSS to 
create an interactive Web version of <span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span></p>

<p>Let's start with what we hope to learn in sprint 6:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Understand The Internet and World Wide Web</li>
	<li>Understand Cloud Computing</li>
	<li>Utilize JavaScript to create interactive Web applications</li>
	<li>Final Project Update</li>
</ul>

<p>Below is our sprint 6 activities list. </p>
<ol>
	<li>Verify sprint end date<NavLink to='/calendar/6'>[calendar]</NavLink></li>
	<li><em>Review sprint 6 assignments</em></li>
	<li>Start working on “Matchmaker Web”<NavLink to='/activity/web-matchmaker'>[link]</NavLink></li>
	<li>Turn your “Final Project Proposal”<NavLink to='/activity/final-project-proposal'>[link]</NavLink> into a Web 
		application by hosting it in the Azure cloud</li>
	<li>Read Chapter 16 “The World Wide Web” of Dale on the review the associated lecture <NavLink to='/activity/dale-www'>[video]</NavLink></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Complete “Matchmaker Web”<NavLink to='/activity/web-matchmaker'>[link]</NavLink></li>

	<li><em>Submit all assignments include your Discussion, Lab, Quiz, and Reflection</em></li>
</ol>

</div>

	)
}