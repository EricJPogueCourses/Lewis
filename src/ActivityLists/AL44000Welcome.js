import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'

export const al44000Welcome = () => {
	return (

<div>
	<h4>Software Engineering</h4>
	<h5>Welcome to Software Engineering!</h5>
	<br />
	<p>Please take a few minutes to view the following welcome video and to review the “Blended Learning” and 
		“Introduction to Scrum” videos provided below.</p>

	<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/pz316akr-welcome.mp4' controls={true} width={1024} height={576} />
	<br />
	<p>Prior to our first class session, please take a few minutes to gain a better understand of 
	Blended Learning and Scrum by reviewing the following videos.</p>
	<ul>
		<li>“Blended Learning & Flipped Classroom” 
			<NavLink to='/activity/blended-learning'>[video]</NavLink></li>
		<li>“Introduction to Scrum in 7 Minutes”
			<NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li> 
	</ul>
</div>

	)
};