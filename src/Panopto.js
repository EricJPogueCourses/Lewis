import React from 'react'
import { NavLink } from 'react-router-dom'

// import * as URLParameters from './URLParameters'
import { cpsc, courseTitle, classSyllabusURL } from './URLParameters'

export const welcome2021Spring = () => {
	return (
		<div>
		<h4>{courseTitle()}</h4>
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
		Finally, you will want to take a look at our course syllabus<a href={classSyllabusURL()}>[link]</a> 
			and obtain the items identified in the “IV. Course Materials.”
		</div> )
}

const IFrameComponent = (props) =>{
	return (<div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}} />);
}

const panoptoWelcomeIFrameTag = () => {
	return "<iframe src='https://lewisu.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ea0cac63-6820-411f-b31a-acaf01489295&autoplay=true&offerviewer=false&showtitle=false&showbrand=false&start=0&interactivity=all' height='576' width='1024' style='border: 1px solid #464646;' allowfullscreen allow='autoplay'></iframe>"
}

// Start programming together section.

// Note that making the following function start with a lower case "P" causes an error in the browser.
const PanoptoIFrameComponent = (props) =>{
	return (<div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}} />);
}

const programmingTogetherPlaylistFor20000 = () => {
	return "<iframe src='https://lewisu.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=5b13e440-2f35-437a-ba5e-acaf01643326&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all' height='576' width='1024' style='border: 1px solid #464646;' allowfullscreen allow='autoplay'></iframe>"
}	 

export const programmingTogether = () => {
	let classReference = cpsc()
	switch(classReference) {
		case '20000-spring-2021-002': return (<div><PanoptoIFrameComponent iframe={programmingTogetherPlaylistFor20000()} /></div>)
		case '24500-spring-2021-001': return (null)
		case '36000-spring-2021-001': return (null)
		case '44000-spring-2021-001': return (null)
		default: return (<div><PanoptoIFrameComponent iframe={programmingTogetherPlaylistFor20000()} /></div>)
	}


	//return (<div><PanoptoIFrameComponent iframe={programmingTogetherPlaylistFor20000()} /></div>)
}