import React from 'react'
import { NavLink } from 'react-router-dom';

export const al24700Sprint05 = () => {
	return (

<div>
<h4>Web and Distributed Programming</h4>
<h5>Sprint 5: Distributed applications, JavaScript, Ajax, and JSON</h5>

<p><em>Wow!</em> We made it to the halfway point. I hope you enjoyed Map Mania. This week we switch gears and move into 
writing Distributed applications using JavaScript, Ajax, and JSON.</p>

<p>You will also notice a continuing trend this week where assignments will become less prescriptive and you
will have more control (and responsibility) in determining what is done and how it is implemented.</p>

<p>Our learning objects are that by the end of the sprint we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Implement Ajax calls utilizing JavaScript and Ajax Toolkits</li>
    <li>Understand Relational Databases and the SQL language</li>
	<li>Create interactive web applications utilizing HTML, CSS,  and JavaScript</li>
	<li>Develop and test shared JSON files</li>
	<li>Fork and Pull GitHub projects to update shared repositories</li>
</ul>  

<p>This week’s  programming assignment is called Mustang and is a small contact manager will take several sprints to 
complete. In the Mustang version 1 we will be utilizing the Cloud and our Microsoft Azure accounts to post
information about ourselves in JSON files that we can utilize to create a Distributed contact manager.</p>

<p>With this in mind our activities list includes:</p>
<ol>
	<li>Verify due dates by checking our course calendar<NavLink to='/calendar/5'>[link]</NavLink></li>
	<li>Review assignments including lab, quiz, discussion, and reflection</li>
	<li>Start working on our Mustang version 1 distributed contact manager</li>
	{/* Todo: Check if there is a Mustang lite tutorial?
		<li>Complete Map Mania Lite <a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/map-mania-lite.mp4' target='_blank'>[video]</a>~2 hours </li>
	*/}
	<li>Read chapter 10 of Sebesta and review our Ajax lecture<NavLink to='/activity/sebesta-chapter-10'>[video]</NavLink></li>
	<li><em>Complete your initial discussion post by the middle of the sprint</em></li>
	<li><em>Complete Mustang version 1 (~10 hours)</em></li>
	<li>Complete the GitHub 'Forking Projects' Tutorial<a href='https://guides.github.com/activities/forking/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
    <li>Complete the GitHub 'Be Social' Tutorial<a href='https://help.github.com/articles/be-social/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li><em>Develop your initial final project proposal by describing the intended application functionality from 
		strictly a user perspective and by providing it an excellent name</em></li>
	<li>Read chapter 13 of Sebesta and review our Database Access through the Web lecture<NavLink to='/activity/sebesta-chapter-13'>[video]</NavLink></li>
	<li><em>Complete and submit all sprint 5 assignments including your lab, quiz, discussion, and reflection</em></li>
</ol>

<p>How would you like to finishing the course by creating something that makes you proud? What type of a final project 
would you enjoy creating? Is there a final project that would both be interesting to create and be something you could 
add to your professional portfolio as you are looking for internships or jobs?</p>

{al24700Sprint05Extras()}

</div>

	)
};

const al24700Sprint05Extras = () => {
	return (

<div>
<br />
<h5>Extras:</h5>
<ul style={{listStyleType:'square'}}>
	<li>Chapter 10 Sebesta - Introduction to Ajax 
		<a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/intro-to-ajax-slides-only.pptx' target='_blank' rel='noopener noreferrer'>[slides]</a>
		<a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/intro-to-ajax.ppsx' target='_blank' rel='noopener noreferrer'>[show]</a></li>
	<li>Chapter 13 of Sebesta - Database Access through the Web 
		<a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/database-access-through-the-web.pptx' target='_blank' rel='noopener noreferrer'>[slides]</a> 
		<a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/database-access-through-the-web.ppsx' target='_blank' rel='noopener noreferrer'>[show]</a></li>
</ul>
</div>

	)
}
