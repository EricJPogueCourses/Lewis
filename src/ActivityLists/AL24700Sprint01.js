import React from 'react'
import { NavLink } from 'react-router-dom';

export const al24700Sprint01 = (syllabusURL) => {
	return (

<div>
<h4>Web and Distributed Programming</h4>
<h5>Sprint 1: The Internet, the Web, Programming with HTML, and Tools of the Trade</h5>

<p><em>Welcome to Web and Distributed Programming!</em> I am looking forward to working with you to deliver high 
quality and interesting Internet software applications. We will be working with multiple software development 
languages in cloud based environments to deliver industrial strength software applications.</p>

<p>You likely noticed that I am using the term “sprint 1” to describe our first set of course activities. Sprints are 
part of the Scrum software development process. The term is used to describe a unit of work which we have committed to
delivering by a given date. We will be learning more about sprints and Scrum in the coming days. For now it is 
sufficient to know that our sprint 1 activities will take approximately 20 hours of focused effort to complete, and we 
need to complete the activities by the sprint 1 end date listed on our course calendar 
<NavLink to='/calendar/1'>[link]</NavLink>.</p>

<p>Let’s start with our sprint 1 Learning Objectives. By the end of sprint 1 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
	<li>Identify, define, and discuss the Internet and the Web</li>
	<li>Develop browser based HTML5 applications that utilize common HTML elements</li>
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
	<li>Start early and consistently work on Lab 1 and Quiz 1 throughout the sprint</li>
	<li>Add your photo to your Blackboard profile<NavLink to='/activity/photo-to-blackboard'>[video]</NavLink></li>
	<li>Read chapter 2 of “Programming The World Wide Web” (Sebesta) and review our chapter 2 lecture<NavLink to='/activity/sebesta-chapter-02'>[video]</NavLink></li>
	<li><em>Complete the Introduction assignment by making your post and responding to at least two of your classmates' posts</em></li>
	<li>Complete “Tools of the Trade - Part 1”<NavLink to='/activity/tools'>[link]</NavLink>~2 hours</li>
	<li><em>Make your initial Discussion 1 post by the middle of the sprint</em></li>
	<li>Complete “Hello World with Python”<NavLink to='/activity/hello-world-python'>[link]</NavLink></li>
	<li>Complete “HTML Programming - Part 1” from W3C<NavLink to='/activity/html'>[link]</NavLink>~2 hours</li>
	<li>Complete “My Favorite Hobby”<NavLink to='/activity/favorite-hobby'>[link]</NavLink>~3 hours</li>
	<li>Read chapter 1 of Sebesta and review the associated lecture<NavLink to='/activity/sebesta-chapter-01'>[video]</NavLink></li>
	<li><em>Complete Discussion 1 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 1, Quiz 1, and Reflection 1</em></li>
</ol>
<p>The best advise that I can give you for this class is to start assignments early and to always submit something. If 
you do these two things, I believe your success is virtually guaranteed.</p>
</div>

	)
}

