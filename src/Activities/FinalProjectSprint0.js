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