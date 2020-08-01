import React from 'react'
import { NavLink } from 'react-router-dom';

export const al24700Sprint07 = () => {
	return (

<div>
<h4>Web and Distributed Programming</h4>
<h5>Sprint 7: More Server-side Programming, Cloud Computing, and Map Reduce</h5>

<p>Welcome to Sprint 7. We have two parts to our programming assignment this week. First, we need to wrap up Mustang 
version 3 by implementing persistent storage. Second, we will be delivering version 1 of our final projects.</p>

<p>By the end of the sprint we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Develop server-side Ajax applications that can response to Ajax call</li>
    <li>Understand Cloud Computing & Map Reduce applications</li>
	<li>Combine HTML, CSS, JavaScript, PHP, GitHub, and Azure to deliver a full dynamic web application</li>
</ul>  

<p>With this in mind our activities list includes:</p>
<ol>
	<li>Verify due dates by checking our course calendar<NavLink to='/calendar/6'>[link]</NavLink></li>
	<li>Review assignments including lab, quiz, discussion, and reflection</li>
	<li>Start working on Mustang version 3</li>
	<li style={{color:'red'}}><em>Complete Mustang version 3 contact manager by the middle of the sprint (~5 hours)</em></li>
	<li>Start working on your Final Project</li>
	<li>Explore Application Architecture - Part 2<a href='https://mediaatoz.blob.core.windows.net/object-oriented-programming/application-architecture-part2.mp4' target='_blank' rel='noopener noreferrer'>[video]</a></li>
	<li><em>Complete your initial discussion post by the middle of the sprint</em></li>
    <li>Explore Cloud Computing and Map Reduce<a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/cloud-computing-mapreduce.mp4' target='_blank' rel='noopener noreferrer'>[video]</a></li>
	<li><em>Complete Final Project version 1 (~5 hours)</em></li>
	<li><em>Complete and submit all assignments including your lab, quiz, discussion, and reflection</em></li>
 </ol>

<p>Let’s finish strong. How can I help?</p>

{al24700Sprint07Extras()}

</div>

	)
}

const al24700Sprint07Extras = () => {
	return (

<div>
<br />
<h5>Extras:</h5>
<ul style={{listStyleType:'square'}}>
	<li>Explore Cloud Computing and Map Reduce
    	<a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/cloud-computing-mapreduce-slides-only.pptx' target='_blank' rel='noopener noreferrer'>[slides]</a> 
        <a href='https://mediaatoz.blob.core.windows.net/web-and-distributed-programming/cloud-computing-mapreduce.ppsx' target='_blank' rel='noopener noreferrer'>[show]</a></li>
</ul>
</div>

	)
}
