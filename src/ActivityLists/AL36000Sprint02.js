import React from 'react'
import { NavLink } from 'react-router-dom';

import { GettingToKnowEachOther, start, complete } from './ProgrammingAssignments'
const programmingAssignment = GettingToKnowEachOther

export const al36000Sprint02 = () => {
	return (

<div>
<h4>Applied Programming Languages</h4>
<h5>Sprint 2: Patterns, Principles, Functional Programming, Interfaces, and Packages</h5>
<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. We even did some programming by completing
Matchmaker with Go. Keep your Go compilers out for this sprint. We are going to start practicing some of the concepts 
we learned while we continue to review object-oriented programming Patterns and Principles while we learn about 
functional programming using Go.</p>

<p>By the end of sprint 2 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Compare and contrast Object-Oriented Programming with Functional Programming</li>
	<li>Create, modify, compile, and execute Go applications using Functional Programming techniques</li>
	<li>Utilize moderately complex configuration management techniques to effectively work in small teams</li>
	<li>Utilize Structs, Interfaces, and Packages to implement Polymorphic and Encapsulated programs</li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint. Once again you are welcome to
pursue the activities in any order you prefer. However, they are listed in the order I think will be the most
beneficial for you to work through the topics. The time commitment for each line item is generally 20 to 40
minutes unless otherwise noted.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar<NavLink to='/calendar/2'>[link]</NavLink></li>
	<li><em>Review sprint 2 assignments including Lab 2, Quiz 2, Discussion 2, Reflection 2, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>
	<li>Study and understand our “Coding Standards”<NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	{/* The above items should be consistent across classes. */ }

	<li>Review Object-Oriented Programming Patterns<NavLink to='/activity-oop/patterns'>[video]</NavLink> 
		and Principles<NavLink to='/activity-oop/principles'>[video]</NavLink></li>
	<li>Within O’Reilly Books<a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a> 
		perform a searches for Golang, Git, and ReactJS  </li>
	<li>Read “Introducing Go” chapters 7 and 8<a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Make your initial Discussion 2 post by the middle of the sprint</em></li>
	<li>Complete “HTML Programming - Part 1” from W3C<NavLink to='/activity/html'>[link]</NavLink> ~2 hours</li>
	<li>Complete “My Favorite Hobby”<NavLink to='/activity/favorite-hobby'>[link]</NavLink>~2 hours</li>
	<li><em>Complete Discussion 2 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 2, Quiz 2, and Reflection 2</em></li>
</ol>
<p>Be sure to start activities and assignments early and to reward yourself when you reach significant milestones.</p>
</div>

	)
}