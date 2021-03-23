import React from 'react';
import { NavLink } from 'react-router-dom';

export const FinalProjectSprint0 = () => {
	return (
	
<div>
<br />
<h4>Final Project Sprint 0</h4>
<h5>Summary: In addition to creating a final project proposal, we are going to deliver something.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li>“Final Project Proposal”<NavLink to='/activity/final-project-proposal'>[link]</NavLink></li>
</ul>

<p>In this activity you will start your final project. Build something. Anything that makes you feel good and shows 
that you invested an appropriate amount of effort. Maybe perform a technology spike?</p>

<em>Requirement</em>
<p>Create something pretty that showcases your idea by:</p>
<ol>
	<li>Successfully deploying it to production environment</li>
	<li>Making the source code available for review</li>
</ol>

</div> )
}

export const FinalProjectSprint1 = () => {
	return (
	
<div>
<br />
<h4>Final Project Sprint 1</h4>
<h5>Summary: Let’s deliver sprint 1 of our final project.</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li>“Final Project Proposal”<NavLink to='/activity/final-project-proposal'>[link]</NavLink></li>
	<li>“Final Project Sprint 0”<NavLink to='/activity/final-project-sprint-0'>[link]</NavLink></li>
</ul>

<p>This is our first full sprint for our final project. We delivered something in sprint 0, we completed sprint 1 
planning, and we have made our specific commitment for sprint 1.</p>

<p>Always remember the in agile and scrum stories must be 100% complete in order to receive any credit for completing 
the story. There is no such thing as “almost complete” or even ”99% complete” in scrum. We often use the term 
<em>done</em> to describe a story that is 100% complete. At a minimum, our definitions of <em>done</em> in sprint 1
includes that a story is fully implemented the story’s user centric functionality, deployed tou the team’s production 
website, and is “demo-able” by every member of the team.</p>

<p>Create something that adds value and you can be proud of creating.</p>

<h6>Requirement 1: Complete sprint 0 Review and Retrospective</h6>
<h6>Requirement 2: Execute sprint 1</h6>
<h6>Requirement 3: Complete sprint 2 planning</h6>

</div> )
}