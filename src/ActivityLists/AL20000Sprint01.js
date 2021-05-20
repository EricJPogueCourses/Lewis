import React from 'react'
import { NavLink } from 'react-router-dom'

import { LearningObjectivesIntro, ActivitiesListIntro, StandardActivities, MakeInitialPost, StandardActivitiesClosing, ScrumIntro, Closing } from './AL00000Sprint01'
import { HelloWorldWithPython } from './ProgrammingAssignments'

export const al20000Sprint01 = () => {
	return ( <div>

<h5>Sprint 1: Getting Started, The Big Picture, Files Systems, and Tools of the Trade</h5>

<p>Welcome to Introduction to Computer Science! In this course we will be exploring the field of computer 
science. The course will include an overview of computer architecture, software engineering, data organization, 
networking, and security. Together we will also explore algorithms, abstractions, computational 
problem solving, and programming.</p>

{ScrumIntro()}

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
	<li>Describe the concept of abstraction</li>
	<li>Identify, define, and discuss numbering systems</li>
	<li>Begin to understand algorithmic thinking, representation, programming, and design</li>
	<li>Utilize important developer tools to create and update basic software applications</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(HelloWorldWithPython)}

	<li>Within O’Reilly Books open “Computer Science Illuminated”<a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and read chapter 11 File Systems and Directories</li>
	<li>Review our “Computer Science Illuminated” chapter 11 lecture<NavLink to='/activity-dale/11'>[video]</NavLink> 
		and be prepared for scrum team discussion</li>
	<li>Complete “Tools of the Trade - Part 1”<NavLink to='/activity/tools'>[link]</NavLink><sup>~2 hours</sup></li>
	<li>Review “Sequences, selections, and loops (repetition)”<a href='https://edu.gcfglobal.org/en/computer-science/sequences-selections-and-loops/1/ ' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	{MakeInitialPost()}

	<li>Read “Computer Science Illuminated” Chapter 1<a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 1 lecture <NavLink to='/activity-dale/1'>[video]</NavLink><sup>~2 hours</sup></li>
	<li>Complete “Numbering Systems with Python”<NavLink to='/activity/numbering-systems-python'>[link]</NavLink></li>
	
	{StandardActivitiesClosing(HelloWorldWithPython)}
</ol>

{Closing()}

</div> )
}

