import React from 'react'
import { NavLink } from 'react-router-dom'

export const al24500Sprint06 = ( props ) => {
	return (

<div>
	<h4>Object-Oriented Programming</h4>
	<h5>Sprint 6: Multithreaded Programming and Application Programming Interfaces</h5>

	<p>Sprint 6! This sprint offers a mix of the old and the new. Some things like hosting JSON files on our Azure
	websites and enhancing our SwissArmyKnife application will be additions to what we have already learned. On the
	other hand, learning how to write multi-threaded Java applications will likely prove to be challenging.</p>

	<p>By the end of this sprint we will be able to:</p>
	<ul style={{ listStyleType: 'square' }}>
		<li>Develop our first multi-threaded Java application</li>
		<li>Create and update a web service by hosting JSON files in Azure</li>
		<li>Enhance intermediate command line Java applications that span multiple Java files</li>
		<li>Create an automated (api level) Java test client</li>
	</ul>

	<p>You will notice this sprint that it looks like our activities list is shrinking. Don't let that fool you. At
	this point in the class many of our activities are naturally migrating from our activities list to our
	assignments. This is because you are becoming more capable of researching and figuring out how to implement new
	features. </p>

	<p>Our activities list for this sprint includes:</p>
	<ol>
		<li><em>Review Programming Assignment 6, Quiz 6, and Discussion Board 6</em></li>
		<li>Review 'Website Creation With GitHub and Microsoft Azure'<NavLink to='/activity/azure-website'>[link]</NavLink></li>
		<li>Complete 'Personal Information JSON Files'<NavLink to='/activity-oop/personal-info-json-to-azure'>[video]</NavLink></li>
		<li><em>Consistently work on the SwissArmyKnife v2 assignment (PA6) and Quiz 6 throughout the sprint ~10 hours</em></li>
		<li><em>Complete your initial Discussion Board post by the middle of the sprint</em></li>
		<li>Create and/or update your JSON files on your MS Azure website by the middle of the sprint to reflect the
			requirements identified in our sprint 6 assignments</li>
		<li>Review 'Performance and Multithreading'<NavLink to='/activity-oop/performance-and-multithreaded-programming'>[video]</NavLink></li>
		<li>Complete 'SleepFast'<NavLink to='/activity-oop/java-sleep-fast'>[video]</NavLink></li>
		<li>Review Object-Oriented Programming Languages and Platforms<NavLink to='/activity-oop/languages-and-platforms'>[video]</NavLink></li>
		<li><em>Complete all sprint 6 assignments and activity list items by the end of the sprint</em></li>
	</ol>

	<p>Feel free to post something in our discussion board forum or to send me an email you have questions.</p><br />

	<p>Additional references:</p>
	<ul style={{ listStyleType: 'square' }}>	
		<li>Sprint 6 recorded Lecture/Discussion session from a previous online Object-Oriented Programming class
			<a href='https://24500lt1.blob.core.windows.net/lecture-recordings/cpsc-24500-2019-01-spring-lt1_2019-02-20.mp4'>[link]</a></li> 
		<li>Git/GitHub Cheat Sheet	
			<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
			target='_blank' rel='noopener noreferrer'>[link]</a></li> 
	</ul> 
</div>

	)
}