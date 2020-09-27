import React from 'react'
import { NavLink } from 'react-router-dom'

export const al44000Sprint02 = () => {
	return (

<div>
<h4>Software Engineering</h4>
<h5>Sprint 2: Node.js, JavaScript, Ruby on Rails, and Azure</h5>

<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. However, we didn't get a chance to write 
much code. This sprint get your code editors out. We are going to start practicing some of the concepts we learned.</p>

<p>By the end of sprint 2 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Write simple HTML, CSS, Javascript, and Node.js applications and install them to Azure</li>
	<li>Understand simple Ruby programs using basic control structures and data structures</li>
	<li>Write and interpret regular expressions</li>
	<li>Comfortably be able to utilize single-developer workflow with Git and GitHub</li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint. Once again you are welcome to
pursue the activities in any order. However, they are listed in the order I think will be the most
effective for you to work through the topics. The time commitment for each line item is generally 20 to 40
minutes unless otherwise noted.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar<NavLink to='/calendar/2'>[link]</NavLink></li>
	<li><em>Review sprint 2 assignments including Lab 2, Quiz 2, Discussion 2, and Reflection 2</em></li>
	<li>Review our “Coding Standards”<NavLink to='/activity/coding-standards'>[link]</NavLink> and consistently utilize 
		them on all activities and assignments</li>
	<li>Read Chapter 6 of Fox on developing SaaS client applications in JavaScript using technologies like AJAX and
		JSON and review the associated class lecture<NavLink to='/activity/fox-chapter-06'>[video]</NavLink></li>
	<li>Briefly scan Chapters 3, 4, and 5 of Fox and review the associated class lecture<NavLink to='/activity/fox-chapter-03'>[video]</NavLink></li>
	<li>Within Safari Books Online execute searches for Node.js, Azure, JavaScript, TypeScript, Express, Git, GitHub, 
		JSON, and Sails</li>
	<li>Analyze and commit to adopting the “How to Be a Success Programmer” suggestions that you feel are the
		most important 
		<a href='https://cpsc-24500.azurewebsites.net/successful-programmer.html'>[link]</a></li>
	<li>Complete the 'HTML5 Tutorial' from W3C 
		<a href='https://www.w3schools.com/html/' target='_blank' rel='noopener noreferrer'>[link]</a> while attempting to elegantly format our course
		syllabus into an HTML 5 document</li>
	<li>Complete the 'CSS Tutorial' from W3C 
		<a href='https://www.w3schools.com/css/' target='_blank' rel='noopener noreferrer'>[link]</a> while enhancing our formatted course syllabus using both
		HTML and CSS</li>
	<li><em>Consistently work on your sprint 2 assignments throughout the sprint ~12 hours</em></li>
	<li><em>Complete discussion board initial DB2 post by the middle of the sprint</em></li>
	<li>Start working on the “JavaScript tutorial” also from W3C
		<a href='https://www.w3schools.com/js/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Review Regular Expressions and how to effectively utilize them within JavaScript
		<a href='https://www.w3schools.com/jsref/jsref_obj_regexp.asp' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Read and Understand the article “What is JSON? JavaScript Object Notation explained” 
		<a href='https://www.infoworld.com/article/3222851/javascript/what-is-json-javascript-object-notation-explained.html'
		target='_blank' rel='noopener noreferrer'>[link]</a></li> 
	<li>Read and Understand “JSON Introduction” from W3C 
		<a href='https://www.w3schools.com/js/js_json_intro.asp' target='_blank' rel='noopener noreferrer'>[link]</a></li> 
	<li>Read Fox sections 'A.6 Getting Started With Git for Version Control' and 'A.7 Getting Started with GitHub'</li>
	<li>Briefly review the following short videos on 
		HTML <a href='https://www.youtube.com/watch?v=wy6O5hAjKAo' target='_blank' rel='noopener noreferrer'>[video]</a>,
		CSS <a href='https://www.youtube.com/watch?v=AfBK2Masemk' target='_blank' rel='noopener noreferrer'>[video]</a>,
		Cookies <a href='https://www.youtube.com/watch?v=Xlt7xeqVfO4' target='_blank' rel='noopener noreferrer'>[video]</a>,
		HTML Attributes <a href='https://www.youtube.com/watch?v=X5ArSbUea_o' target='_blank' rel='noopener noreferrer'>[video]</a>,
		Ruby MVC Create and Update <a href='https://www.youtube.com/watch?v=XXrYmVzjTKQ' target='_blank' rel='noopener noreferrer'>[video]</a>,
		and HAML <a href='https://www.youtube.com/watch?v=yX1tMdBuG3g' target='_blank' rel='noopener noreferrer'>[video]</a></li>
	<li><em>Complete and submit all sprint 2 assignments including Lab 2, Quiz 2, Discussion Board 2, and your Journal entry</em></li>
</ol>
{extras()}
</div>
	)
}

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review our class sample code by executing “git clone https://github.com/EricJPogueCourses/SE-ExampleCode.git”</li>
			<li>Complete “Deploying Node.js on Microsoft Azure”<a href='https://app.knowmia.com/lyyA' target='_blank' rel='noopener noreferrer'>[link]</a></li>			
			<li>Complete “Website Creation with GitHub and Microsoft Azure - 2020 Supplemental Edition”<NavLink to='/activity/azure-website-supplemental-2020'>[link]</NavLink></li>
			<li>Review “Website Creation with GitHub and Microsoft Azure”<NavLink to='/activity/azure-website'>[link]</NavLink></li>
			<li>Review Git Cheat Sheet from GitHub<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf'
				target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul>
	</div>)
}