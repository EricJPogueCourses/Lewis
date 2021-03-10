import React from 'react'
import { NavLink } from 'react-router-dom'

import { FinalProjectProposal, FinalProjectSprint0, start, complete } from './ProgrammingAssignments'
const programmingAssignment = FinalProjectSprint0

export const al24500Sprint05 = ( props ) => {
	return (

<div>
<h4>Object-Oriented Programming</h4>
<h5>Sprint 5: Network Programming and The Cloud</h5>

<p>Sprint 5. Now your in the driver’s seat. You will quickly realize that starting this sprint you are in the driver’s 
seat doing more more of your own research and decision making. For example, you will see activities relating to 
Microsoft Azure and accessing JSON files over the Internet from Java. I will be giving you some direction but you will 
have the power to explore options, experiment, and make decisions on how you wish to implement the features. However, 
always remember: </p>

<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
“With great power there must also come great responsibility”<br /></div>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
-Peter Parker (aka Spider-Man)</div>
<br />

<p>We will start working on our Final Project proposals this sprint. How would you like to finishing the 
class by creating something that makes you proud? What type of a final project would you enjoy creating? Is 
there a final project that would both be interesting to create and be something you could add to your professional 
portfolio as you are looking for internships or jobs?</p>

<p>By the end of this sprint we will be able to:</p>
<ul style={{ listStyleType: 'square' }}>
	<li>Develop your first network and distributed Java application</li>
	<li>Create a web service utilizing the MS Azure cloud platform</li>
	<li>Develop intermediate command line Java applications that span multiple Java files</li>
	<li>Understand software testing and the basics of software development life cycles</li>
	<li>Describe multiple object-oriented languages and platforms</li>
</ul>

<p>Below is our sprint 5 activities list. </p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar<NavLink to='/calendar/5'>[link]</NavLink></li>
	<li><em>Review Lab 5, Quiz 5, Discussion 5, Reflection 5, and Lab Demo</em></li>
	<li>{start(FinalProjectProposal)}</li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Complete our Testing lecture<NavLink to='/activity-oop/java-testing'>[link]</NavLink></li>
	<li>Complete “Azure Free Static Website”<NavLink to='/activity/azure-website'>[link]</NavLink>~3 hours</li>
	<li>Review “What is JSON? JavaScript Object Notation explained”<a href='https://www.infoworld.com/article/3222851/javascript/what-is-json-javascript-object-notation-explained.html' target='_blank' rel='noopener noreferrer'>[link]</a>
		and “JSON Introduction” from W3C <a href='https://www.w3schools.com/js/js_json_intro.asp' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Create an Azure website to host globally accessible JSON files</li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(FinalProjectProposal)}</li>
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 5, Lab 5, Quiz 5, and Reflection 5</em></li>
</ol>

<p>Feel free to post something in our Class Forum discussion board forum or to send me an email you have any
questions. Also, be watching for Announcements through Blackboard during the sprint as I am sure that something
will come up.</p><br />

<p>Additional references:</p>
<ul style={{ listStyleType: 'square' }}>
	<li>Sprint 5 Recorded Lecture/Discussion session from a previous online Object-Oriented Programming class
		<a href='https://24500lt1.blob.core.windows.net/lecture-recordings/cpsc-24500-2019-01-spring-lt1_2019-02-13.mp4'>[link]</a></li>
	<li>Git/GitHub Cheat Sheet	
		<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
		target='_blank' rel='noopener noreferrer'>[link]</a></li> 
</ul> 
</div>

	)
}

// Todo: Determine how to reusing and possibly enhance testing.