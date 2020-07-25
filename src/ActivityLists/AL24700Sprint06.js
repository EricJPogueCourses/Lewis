import React from 'react'
import { NavLink } from 'react-router-dom';

export const al24700Sprint06 = () => {
	return (

<div>
<h4>Web and Distributed Programming</h4>
<h5>Sprint 6: Server-side Programming with PHP or Node.js</h5>

<p>Welcome to Sprint 6! Need I say more? I hope you enjoyed our first implementation Mustang. This week it’s
time to work on Mustang version and to do a little server-side programming with PHP. Yes, I know that many of you
would like to get your hands dirty with Node.js and JavaScript server-side programming. So would I, but we
need to make sure that we are comfortable with PHP as well. Feel free to utilize Node.js for our assignments if
you would like. It might be a little more challenging to complete the assignments as my examples for the week
will be in PHP. However, feel free to give Node.js a try and I will be sure to throw a few points your way
for trying something new. You are also welcome to utilize whichever environment you prefer in your final project.</p>

<p>Our learning objects are that by the end of the sprint we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Understand server-side web programming languages and platforms</li>
	<li>Study the PHP language and platform</li>
    <li>Develop and test our first PHP scripts</li>
    <li>Independently develop, test, and deploy HTML, CSS, JavaScript, and PHP based applications</li>
</ul>  

<p>In addition to implementing new features in Mustang version 2, we will be updating our final project proposals with
a technical design. Make sure your final project is something that you find interesting and that it is at least slightly 
more more challenging than what we have previously developed in class. You are free to work in teams of up to 2 people 
if you would like.</p>

<p>With this in mind our activities list includes:</p>
<ol>
	<li>Verify due dates by checking our course calendar<NavLink to='/calendar/6'>[link]</NavLink></li>
	<li>Review assignments including lab, quiz, discussion, and reflection</li>
	<li>Start working on our Mustang version 2 distributed contact manager</li>
	{/* Todo: Check if there is a Mustang version 2 lite tutorial?
		<li>Complete Map Mania Lite <a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/map-mania-lite.mp4' target='_blank'>[video]</a>~2 hours </li>
	*/}
	<li>Read chapter 9 of Sebesta and review our PHP lecture<NavLink to='/activity/sebesta-chapter-09'>[video]</NavLink></li>
	<li><em>Complete your initial discussion post by the middle of the sprint</em></li>
	<li><em>Complete Mustang version 2 (~10 hours)</em></li>
	<li><em>Update your initial final project proposal by including a technical design and determining if you be working
		on it as part of a team or working on it solo</em></li>
	<li>Explore Application Architecture - Part 1<a href='https://mediaatoz.blob.core.windows.net/object-oriented-programming/application-architecture-part1.mp4' target='_blank' rel='noopener noreferrer'>[video]</a></li>
	<li><em>Complete and submit all assignments including your lab, quiz, discussion, and reflection</em></li>
</ol>

<p>How would you like to finishing the course by creating something that makes you proud? What type of a final project 
would you enjoy creating? Is there a final project that would both be interesting to create and be something you could 
add to your professional portfolio as you are looking for internships or jobs?</p>

{al24700Sprint06Extras()}

</div>

	)
};

const al24700Sprint06Extras = () => {
	return (

<div>
<div>
<br />
<h5>Extras:</h5>
<ul style={{listStyleType:'square'}}>
	<li>Chapter 9 Sebesta - Introduction to PHP
		<a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/intro-to-php-slides-only.pptx' target='_blank' rel='noopener noreferrer'>[slides]</a> 
        <a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/intro-to-php.ppsx' target='_blank' rel='noopener noreferrer'>[show]</a></li>
	<li>Sprint 6 Recorded Lecture/Discussion session from a previous class<a href='https://recordings.join.me/ZFa-lvS3G0W7TEieUjqKuw' target='_blank' rel='noopener noreferrer'>[link]</a></li>      
	<li>Git/GitHub Cheat Sheet<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ul>
</div>
</div>

	)
}
