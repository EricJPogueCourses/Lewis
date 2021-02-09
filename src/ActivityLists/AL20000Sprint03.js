import React from 'react'
import { NavLink } from 'react-router-dom'

import { AzureWebsite, start, complete } from './ProgrammingAssignments'
const programmingAssignment = AzureWebsite

export const al20000Sprint03 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 3: Algorithms, Abstraction, Variables, Expressions, and more Web development</h5>

<p>Welcome to sprint 3. I hope you enjoyed our work with HTML and CSS. In this sprint we are going to get back to  
Python as we explore variables and expressions. We will also take another look at abstraction. Finally, we will look at
algorithms.</p>

<p>Let's start with what we hope to be able to do by the end of sprint 3:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Identify, define, and utilize algorithms</li>
	<li>Understand and discuss computing components</li>
	<li>Effectively utilize file systems</li>
	<li>Understand variables and expressions</li>
	<li>Utilize Git and GitHub along with Microsoft Azure to manage content and deploy web applications</li>
</ul>

<p>Below is our sprint 3 activities list:</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar<NavLink to='/calendar/3'>[link]</NavLink></li>
	<li><em>Review sprint 3 assignments including Lab 3, Quiz 3, Discussion 3, Reflection 3, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	<li>Review the CAMS Study Table tutoring options<NavLink to='/activity/study-table'>[link]</NavLink></li>
	<li>Review our class example code<NavLink to='/activity/example-code'>[link]</NavLink></li>
	<li>Review our coding standards<NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	{/* The above items should be consistent across classes. */ }

	<li>Read Dale chapter 4 Gates and Circuits<a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 4 lecture <NavLink to='/activity-dale/4'>[video]</NavLink></li>
	<li>Complete “HTML Programming - Part 2” from W3C<NavLink to='/activity/html'>[link]</NavLink>~4 hours</li>
	<li><em>Complete your initial Discussion 3 post by the middle of the sprint</em></li>
	<li>Read Dale chapter 5 Computing Components<a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 5 lecture <NavLink to='/activity-dale/5'>[video]</NavLink></li>
	<li>Review Git Cheat Sheet from GitHub<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
		target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Review, test, and <em>enhance</em> “Getting to Know Each Other”<NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink>
		from last sprint</li>
	<li>Deploy “Getting to Know Each Other"<NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink> from 
		last sprint to an Azure website<NavLink to='/activity/azure-website'>[link]</NavLink><sup>~4 hours</sup></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 3, Quiz 3, and Reflection 3</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials<NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>

	)
}

const extras = () => {
	return (null)
}