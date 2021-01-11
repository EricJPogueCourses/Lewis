import React from 'react'
import { NavLink } from 'react-router-dom'

import { HelloWorldWithPython, start, complete } from './ProgrammingAssignments'
const programmingAssignment = HelloWorldWithPython

export const al20000Sprint01 = (syllabusURL) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 1: Getting Started, The Big Picture, Files Systems, and Tools of the Trade</h5>

<p>Welcome to Introduction to Computer Science! In this course we will be exploring the field of computer 
science. The course will include an overview of computer architecture, networking, data organization, and security. 
Together we will also explore algorithms, abstractions, computational problem solving, and programming. </p>

<p>Let's start with our sprint 1 Learning Objectives. By the end of sprint 1 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
	<li>Describe the concept of abstraction</li>
	<li>Identify, define, and discuss numbering systems</li>
	<li>Begin to understand algorithmic thinking, representation, programming, and design</li>
	<li>Utilize important developer tools to create and update basic software applications</li>
</ul>

<p>Below is our sprint 1 activities list. Although you are welcome to pursue the activities in any order, they are
listed in the order I think will be the most efficient to complete. Expect each item to take 20 to 40 minutes of 
focused time unless otherwise noted. <em>Bold</em> items are graded assignments.</p>
<ol>
	<li>Maintain laser focus on due dates by reviewing our sprint calendar<NavLink to='/calendar/1'>[link]</NavLink></li>
	<li>Review course syllabus<a href={syllabusURL}>[link]</a></li>
	<li>Understand Blended Learning by reviewing “Blended Learning &amp; Flipped Classroom”<NavLink to='/activity/blended-learning'>[video]</NavLink></li>
	<li>Be prepared to participate in a Scrum team by watching “Introduction to Scrum in 7 Minutes”<NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li>
	<li><em>Review sprint 1 assignments including Introduction, Lab 1, Quiz 1, Discussion 1, and Reflection 1</em></li>
	<li>Start working on “Tools of the Trade”<NavLink to='/activity/tools'>[link]</NavLink>by setting up Discord and O’Reilly Books</li>
	<li><em>Complete the Introduction assignment by making your post and responding to at least two of your classmates</em></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent and complete by the end of the second class session. */ }

	<li>Within O’Reilly Books open “Computer Science Illuminated”<a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and read chapter 11 File Systems and Directories</li>
	<li>Review our “Computer Science Illuminated” chapter 11 lecture<NavLink to='/activity/dale-chapter-11'>[video]</NavLink> 
		and be prepared for scrum team discussion on the lecture topics</li>

	<li>Add a representative photo of yourself to your Blackboard and Zoom profiles<NavLink to='/activity/photo-to-blackboard'>[video]</NavLink></li>
	<li><em>Make your initial Discussion 1 post by the middle of the sprint</em></li>
	<li>Read “Computer Science Illuminated” Chapter 1<a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 1 lecture <NavLink to='/activity/dale-chapter-01'>[video]</NavLink><sup> ~2 hours</sup></li>
	<li>Complete “Tools of the Trade - Part 1”<NavLink to='/activity/tools'>[link]</NavLink><sup> ~2 hours</sup></li>
	<li>Complete “Hello World with Python”<NavLink to='/activity/hello-world-python'>[link]</NavLink></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 1 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 1, Quiz 1, and Reflection 1</em></li>
</ol>
<p>The best advise that I can give you for this class is to start assignments early and to always submit something. If 
you do these two things, I believe your success is virtually guaranteed.</p>
</div>

	)
}
