import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'

export const al20000Welcome = (syllabusURL) => {
	return (

<div>
{console.log(syllabusURL)}
<h4>Introduction to Computer Science</h4>
<h5>Welcome to Introduction to Computer Science!</h5>
<br />
<p>Welcome! Please take a few minutes to view your welcome video below and to complete the “Getting Started” 
activities listed below prior to our first class.</p>

<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/pz316akr-welcome.mp4' controls={true} width={1024} height={576} />

<br />
<h5>Getting Started</h5>
<p><em>Prior to our first class session, </em>please take a few minutes to complete the following activities to gain a 
better understanding of how we will be working together, and to understand what needs to be done first in order to be 
successful in this class.</p>
<ol>
	<li>Review our course syllabus <a href={syllabusURL}>[link]</a> and obtain the items identified in section “IV. Course Materials”</li>
	<li>Watch “Blended Learning & Flipped Classroom”<NavLink to='/activity/blended-learning'>[video]</NavLink></li>
	<li>Review “Introduction to Scrum in 7 Minutes”<NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li> 
	<li>Watch the “Blackboard Ultra”<NavLink to='/activity/blackboard-ultra'>[video]</NavLink></li> 
</ol>
</div>

	)
}

