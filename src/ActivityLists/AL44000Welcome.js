import React from 'react'
import ReactPlayer from "react-player"

const al44000Welcome = () => {
	return (

<div>
	<h4>Software Engineering</h4>
	<h5>Welcome Message</h5>

	<p><em>Welcome to Software Engineering!</em> Please take a moment to review welcome video below.</p>

	<ReactPlayer url="https://botb.blob.core.windows.net/nvm4zqwm/pz316akr-welcome.mp4" controls={true} />

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

export default al44000Welcome