import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint06 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 6: Networks, The Internet, Cloud Computing, and Updated Final Project Proposal</h5>

<p>Welcome to sprint 6. Sprint 6 is going to see you taking control and being more proactive exploring how to learn 
more about a topic. The new topic this sprint is JavaScript. We will utilize JavaScript along with HTML and CSS to 
create an interactive version of<span style={{color: "red"}}> &#10084;&#10084;&#10084;</span> Matchmaker for the Web <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span></p>

<p>Let's start with what we hope to learn in sprint 6:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Understand and utilize The Internet and World Wide Web</li>
	<li>Understand and utilize Cloud Computing</li>
	<li>Utilize JavaScript to create interactive Web applications</li>
	<li>Update our Final Project proposals</li>
</ul>

<p>Below is our sprint 6 activities list. </p>
<ol>
	<li>Verify sprint end date<NavLink to='/calendar/6'>[calendar]</NavLink></li>
	<li><em>Review sprint 6 assignments including Lab 6, Quiz 6, Discussion 6, and Reflection 6</em></li>
	<li>Start working on “Matchmaker for the Web”<NavLink to='/activity/matchmaker-web'>[link]</NavLink></li>
	<li>Review the following activities that were completed in previous sprints:</li>
	<ul style={{listStyleType:'square'}}>
		<li>“Matchmaker with Python”<NavLink to='/activity/matchmaker-python'>[link]</NavLink></li>
		<li>“Getting to Know Each Other”<NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>
		<li>“Website Creation with GitHub and Microsoft Azure - 2020 Supplemental Edition” (highly recommended)<NavLink to='/activity-config/git-deployment-to-azure-supplemental-2020'>[link]</NavLink></li>
	</ul>
	<li>Read Dale chapter 16 The World Wide Web<a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 16 lecture <NavLink to='/activity-dale/16'>[video]</NavLink></li>
	<li>Turn your “Final Project Proposal”<NavLink to='/activity/final-project-proposal'>[link]</NavLink> into a Web 
		application by hosting it in the Azure Cloud</li>
	<li>Review the JavaScript tutorial from W3C <a href='https://www.w3schools.com/js/'>[link]</a></li>
	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li><em>Complete “Matchmaker for the Web”</em><NavLink to='/activity/matchmaker-web'>[link]</NavLink> ~8 hours</li>
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
			<li>Complete Programming Together with MatchmakerWebLite<a href='https://app.knowmia.com/fjqp'target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Complete Programming Together with MatchmakerWebLite - Part 2<a href='https://app.knowmia.com/Qu6S'target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Review programming together “HelloWorld”<a href='https://app.knowmia.com/mhYz' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Review programming together “HelloWorldPlus with Pictures”<a href='https://app.knowmia.com/mhYz' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Review “HTML Programming - Part 1” from W3C<NavLink to='/activity/html'>[link]</NavLink>~4 hours</li>
			<li>Review “HTML Programming - Part 2” from W3C<NavLink to='/activity/html'>[link]</NavLink>~4 hours</li>
			<li>Review “Azure Free Static Website”<NavLink to='/activity/azure-website'>[link]</NavLink>~3 hours</li>
			<li>Review “Website Creation with GitHub and Microsoft Azure - 2020 Supplemental Edition” (highly recommended)<NavLink to='/activity-config/git-deployment-to-azure-supplemental-2020'>[link]</NavLink></li>
		</ul>
	</div>)
}