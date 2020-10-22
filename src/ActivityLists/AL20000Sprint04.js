import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint04 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 4: Selection, Repetition, String, Lists, and Dictionaries</h5>

<p>Sprint 4. Where does the time go? Let’s write some Python code.</p>

<p>By the end of this sprint we will be able to:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Create, update, and test Python applications</li>
	<li>Understand variables &amp; expressions, lists &amp; dictionaries, repetition, selection, and functions</li>
	<li>Verify our understanding of file systems</li>
	<li>Develop a basic understanding of artificial intelligence</li>
</ul>

<p>Below is our sprint 4 activities list:</p>
<ol>
	<li>Stay focused on due dates<NavLink to='/calendar/4'>[calendar]</NavLink></li>
	<li><em>Review sprint 4 assignments including Lab 4, Quiz 4, Discussion 4, and Reflection 4</em></li>
	<li>Start early and remain laser focused on “Matchmaker”<NavLink to='/activity/match-maker'>[link]</NavLink></li>
	<li>Read Chapter 11 on File Systems and Directories from Dale on  the review the associated lecture <NavLink to='/activity/dale-chapter-11'>[video]</NavLink></li>
	<li>Read Chapter 13 on Artificial Intelligence from Dale on  the review the associated lecture <NavLink to='/activity/dale-chapter-13'>[video]</NavLink></li>
	<li>Within Safari Books Online<a href='https://learning.oreilly.com/home/' target='_blank' rel='noopener noreferrer'>[link]</a>
		find “Introducing Python, 2nd Edition” by Bill Lubanovic (Lubanovic)</li>
	<li>Read Lubanovic Preface and Chapter 1 while completing “Using Code Examples” from the Preface</li>
	<li><em>Submit your initial Discussion 4 post by the middle of the sprint</em></li>
	<li>Execute and review “quotes.py” from the Lubanovic Chapter 1 example code</li>
	<li>Complete “Matchmaker”<NavLink to='/activity/match-maker'>[link]</NavLink>~6 hours</li>
	<li><em>Complete Discussion 4 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit all assignments including your Lab, Quiz, and Reflection</em></li>
</ol>
{extras()}
</div>

	)
}

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Complete Matchmaker Lite<a href='https://app.knowmia.com/DW4E' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>** Review “Python Programming - Part 1 &amp; Part 2” from W3C<NavLink to='/activity/python-w3c'>[link]</NavLink> **</li>
			<li>Within Safari Books Online<a href='https://learning.oreilly.com/home/' target='_blank' rel='noopener noreferrer'>[link]</a>
				find “Computer Science Illuminated, 6th Edition” by Dale</li>		
			<li>Clone the sample source code from “Introducing Python, 2nd Edition” by executing: <br />
				“git clone https://github.com/madscheme/introducing-python”</li>
			<li>Review Git Cheat Sheet from GitHub<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
				target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Review tutoring options<a href='https://botb.blob.core.windows.net/nvm4zqwm/cadahnn5-tutoring.pdf'
				target='_blank' rel='noopener noreferrer'>[link]</a></li> 
		</ul>
	</div>)
}