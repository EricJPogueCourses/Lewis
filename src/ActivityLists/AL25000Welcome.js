import React from 'react'
import ReactPlayer from "react-player"

const al25000Welcome = () => {
	return (

<div>
	<h4>Object-Oriented Programming</h4>
	<h5>Welcome to Object-Oriented Programming!</h5>
	<br />
	<p>Please take a few minutes to view the following welcome video.</p>
	<ReactPlayer url="https://botb.blob.core.windows.net/nvm4zqwm/pz316akr-welcome.mp4" controls={true} width={1024} height={576} />
	<br />
	<p>Prior to our first class session, please take a few minutes to gain a better understand of 
	Blended Learning and Scrum by reviewing the following videos.</p>
	<ul>
		<li>"Blended Learning & Flipped Classroom" 
			<a href="https://www.youtube.com/watch?v=paQCE58334M&vl=en-US" target="_blank" rel="noopener noreferrer">[video]</a></li>
		<li>“Introduction to Scrum in 7 Minutes”
			<a href="https://www.youtube.com/watch?v=9TycLR0TqFA" target="_blank" rel="noopener noreferrer">[video]</a></li> 
	</ul>
</div>

	)
};

export default al25000Welcome