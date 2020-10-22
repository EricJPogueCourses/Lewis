import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint05 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 5: Functions, Encryption, Hashing, Artificial Intelligence, and Final Projects</h5>

<p><em>Wow!</em> We made it to the halfway point. I hope you enjoyed 
<span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span>.
This week we switch gears and move into graphical drawing using Turtle graphics.</p>

<p>We will also start working on our Final Project proposals this sprint. How would you like to finishing the course by 
creating something that makes you proud? What type of a final project would you enjoy creating? Is there a final project 
that would both be interesting to create and be something you could add to your professional portfolio as you are 
looking for internships or jobs? How can I help?</p>

<p>You will also notice a continuing trend this sprint where assignments will become less prescriptive and you
will have more control <em>and responsibility</em> in determining what is done and how it is implemented.</p>

<p>Let's start with what we hope to learn in sprint 5:</p>
<ul style={{listStyleType:'square'}}>
	<li>Explore Networks</li>
	<li>Understand Functions</li>
	<li>Understand Encryption and Hashing</li>
	<li>Create your initial Final Project Proposal</li>
</ul>

<p>Below is our sprint 5 activities list. </p>
<ol>
	<li>Verify sprint end date<NavLink to='/calendar/5'>[calendar]</NavLink></li>
	<li><em>Review sprint 5 assignments including Lab 5, Quiz 5, Discussion 5, and Reflection 5</em></li>
	<li>Start working on your “Final Project Proposal”<NavLink to='/activity/final-project-proposal'>[link]</NavLink></li>
	<li>Start working on “TurtleDraw”<NavLink to='/activity/turtle-draw'>[link]</NavLink></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Read Chapter 15 “Networks” of Dale on the review the associated lecture <NavLink to='/activity/dale-networks'>[video]</NavLink></li>
	<li>Read chapters 2 &amp; 3 of Lubanovic and complete each of the exercises<a href='https://learning.oreilly.com/home/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Complete your “Final Project Proposal”</em><NavLink to='/activity/final-project-proposal'>[link]</NavLink> ~2 hours</li>
	<li><em>Complete “TurtleDraw”</em><NavLink to='/activity/turtle-draw'>[link]</NavLink> ~8 hours</li>	
	<li><em>Submit all assignments include your Discussion, Lab, Quiz, and Reflection</em></li>
</ol>
{extras()}
</div>

	)
}

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review the Turtle graphics documentation<a href='https://docs.python.org/3/library/turtle.html#introduction'target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Review “Python Programming - Part 1 &amp; Part 2” from W3C<NavLink to='/activity/python-w3c'>[link]</NavLink></li>
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