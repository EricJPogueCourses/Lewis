import React from 'react'
import { NavLink } from 'react-router-dom'

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
	<li>Stay focused on the due dates<NavLink to='/calendar/3'>[link]</NavLink></li>
	<li><em>Review sprint 3 assignments including Lab 3, Quiz 3, Discussion 3, and Reflection 3</em></li>
	<li>Study our “Coding Standards”<NavLink to='/activity/coding-standards'>[link]</NavLink> and consistently utilize 
		them on <em>all</em> activities and assignments</li>
	<li>Start early and consistently work on Lab 3 and Quiz 3 throughout the sprint</li>
	<li>Complete “HTML Programming - Part 2” from W3C<NavLink to='/activity/html'>[link]</NavLink>~4 hours</li>
	<li>Read Chapter 5 of “Computer Science Illuminated” by Nell Dale and John Lewis (Dale) and review the associated   
		lecture <NavLink to='/activity/dale-chapter-05'>[video]</NavLink></li>
	<li>Read Chapter 6 of Dale and review the associated lecture <NavLink to='/activity/dale-chapter-06'>[video]</NavLink></li>	
	<li><em>Make your initial Discussion 3 post by the middle of the sprint</em></li>
	<li>Review Git Cheat Sheet from GitHub<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
		target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Complete “Azure Free Static Website”<NavLink to='/activity/azure-website'>[link]</NavLink>~3 hours</li>
	<li>Review, test, and <em>enhance</em> your implementation of “Getting to Know Each Other”<NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink>
			from last sprint</li>
	<li>Deploy your “Getting to Know Each Other" web page to a new Azure website</li>
	<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 3, Quiz 3, and Reflection 3</em></li>
</ol>
{extras()}
</div>

	)
}

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review available course sample code by executing “git clone https://github.com/EricJPogue/ExampleCode.git”</li>
			<li>Complete “Website Creation with GitHub and Microsoft Azure - 2020 Supplemental Edition”
				<NavLink to='/activity/azure-website-supplemental-2020'>[link]</NavLink></li>
			<li>Review tutoring options<a href='https://botb.blob.core.windows.net/nvm4zqwm/cadahnn5-tutoring.pdf'
				target='_blank' rel='noopener noreferrer'>[link]</a></li> 
		</ul>
	</div>)
}