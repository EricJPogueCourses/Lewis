import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint01 = (syllabusURL) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 1: Getting Started, Number Systems, Data Representation, and Tools of the Trade</h5>

<p>Welcome to Introduction to Computer Science! In this course we will be exploring the field of computer 
science. The course will include an overview of computer architecture, networking, data organization, and security. 
Together we will also explore algorithms, abstractions, computational problem solving, and programming. </p>

<p>You likely noticed that I am using the term “sprint 1” to describe our first set of course activities. Sprints are 
part of the Scrum software development process. The term is used to describe a unit of work which we have committed to
delivering by a given date. We will be learning more about sprints and Scrum in the coming days. For now it is 
sufficient to know that our sprint 1 activities will take approximately 20 hours of focused effort to complete, and 
we need to complete the activities by the sprint 1 end date listed on our course calendar 
<NavLink to='/calendar/1'>[link]</NavLink>.</p>

<p>Let’s start with our sprint 1 Learning Objectives. By the end of sprint 1 we will be able to:</p>
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
	<li>Review course syllabus<a href={syllabusURL}>[link]</a></li>
	<li>Maintain laser focus on due dates by reviewing our course calendar<NavLink to='/calendar/1'>[link]</NavLink></li>
	<li>Understand Blended Learning by reviewing “Blended Learning & Flipped Classroom”<NavLink to='/activity/blended-learning'>[video]</NavLink></li>
	<li>Be prepared to participate in a Scrum team by watching “Introduction to Scrum in 7 Minutes”<NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li>
	<li><em>Review sprint 1 assignments including Introduction, Lab 1, Quiz 1, Discussion 1, and Reflection 1</em></li>
	<li>Start early and consistently work on Lab 1 and Quiz 1 throughout the sprint</li>
	<li>Add your photo to your Blackboard profile<NavLink to='/activity/photo-to-blackboard'>[video]</NavLink></li>
	<li>Read Chapter 1 of “Computer Science Illuminated” by Nell Dale and John Lewis (Dale) and review our chapter 1 
		lecture <NavLink to='/activity/dale-chapter-01'>[video]</NavLink> ~2 hours</li>
	<li><em>Complete the Introduction assignment by making your post and responding to at least two of your classmates'</em></li>
	<li>Complete “Tools of the Trade - Part 1”<NavLink to='/activity/tools'>[link]</NavLink> ~3 hours</li>
	<li><em>Make your initial Discussion 1 post by the middle of the sprint</em></li>
	<li>Complete “Hello World with Python”<NavLink to='/activity/hello-world-python'>[link]</NavLink></li>
	<li>Read Chapter 2 of “Computer Science Illuminated” by Nell Dale and John Lewis (Dale) and chapter 2 lecture<NavLink to='/activity/dale-chapter-02'>[video]</NavLink></li>
	<li>Complete “Numbering Systems with Python”<NavLink to='/activity/numbering-systems-python'>[link]</NavLink></li>
	<li><em>Complete Discussion 1 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 1, Quiz 1, and Reflection 1</em></li>
</ol>
<p>Be sure to start assignments early and to reward yourself when you reach significant milestones.</p>
{extras()}
</div>

	)
}

const extras = () => {
	return (null)
}