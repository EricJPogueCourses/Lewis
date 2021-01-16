import React from 'react'
import { NavLink } from 'react-router-dom'

import * as URLParameters from './URLParameters'

export const welcome2021Spring = () => {
	return (
		<div>
		<h4>{URLParameters.title()}</h4>
		<h5>Welcome to Lewis University Spring 2021 Semester!</h5>
		<p style={{marginTop:'20px'}}>Please take a few minutes to view your spring 2021 welcome message.</p>
		<IFrameComponent iframe={panoptoWelcomeIFrameTag()} />
		<br />
		<p>Prior to our first class session, please also take a few minutes to gain a better understand of 
		Blended Learning and Scrum by reviewing the following videos.</p>
		<ul>
			<li>“Blended Learning &amp; Flipped Classroom” 
				<NavLink to='/activity/blended-learning'>[video]</NavLink></li>
			<li>“Introduction to Scrum in 7 Minutes”
				<NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li> 
		</ul>
		Finally, you will want to take a look at our course syllabus<a href={URLParameters.classSyllabusURL()}>[link]</a> 
			and obtain the items identified in the “IV. Course Materials.”
		</div> )
}

const IFrameComponent = (props) =>{
	return (<div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}} />);
}

const panoptoWelcomeIFrameTag = () => {
	return "<iframe src='https://lewisu.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ea0cac63-6820-411f-b31a-acaf01489295&autoplay=true&offerviewer=false&showtitle=false&showbrand=false&start=0&interactivity=all' height='576' width='1024' style='border: 1px solid #464646;' allowfullscreen allow='autoplay'></iframe>"
}