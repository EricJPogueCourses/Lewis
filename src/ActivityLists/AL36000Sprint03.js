import React from 'react'
import { NavLink } from 'react-router-dom';

import { CodingStandardsValidatorPart2, start, complete } from './ProgrammingAssignments'
const programmingAssignment = CodingStandardsValidatorPart2

export const al36000Sprint03 = () => {
	return (

<div>
<h4>Applied Programming Languages</h4>
<h5>Sprint 2: Testing and Programming Language Features</h5>
<p><em>Welcome to sprint 3.</em> </p>

<p>By the end of sprint 2 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Compare and contrast the features of various popular programming languages</li>
	<li>Implement manual and automated testing with Go applications</li>
	<li>Utilize configuration management techniques that would be appropriate for large teams and complex applications</li>
	<li></li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint. Once again you are welcome to
pursue the activities in any order you prefer. However, they are listed in the order I think will be the most
beneficial for you to work through the topics. The time commitment for each line item is generally 20 to 40
minutes unless otherwise noted.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar<NavLink to='/calendar/2'>[link]</NavLink></li>
	<li><em>Review sprint 3 assignments including Lab 3, Quiz 3, Discussion 3, Reflection 3, and Lab Demo</em></li>
	<li>Review our “Coding Standards”<NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Read “Introducing Go” chapters 9 on Testing<a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Read “Introducing Go” chapters 8 on Packages<a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Complete the “A Tour of Go” tutorial<a href='https://tour.golang.org/list' target='_blank' rel='noopener noreferrer'>[link]</a></li>

	<li><em>Make your initial Discussion 3 post by the middle of the sprint</em></li>
	<li>Recall searching O’Reilly Books<a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a> 
		for Golang, Git, and ReactJS</li>
	<li>Within O’Reilly Books<a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a> 
		find the most interesting book on Golang, scan the contents, and be ready to discuss the book</li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 3 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 3, Quiz 3, and Reflection </em></li>
</ol>

<p>Be sure to periodically check for new programming together tutorials<NavLink to='/activity/programming-together'>[link]</NavLink>.</p>

</div>

	)
}