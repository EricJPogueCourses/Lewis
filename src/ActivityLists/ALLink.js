import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import ReactPlayer from 'react-player'

class ALLink extends Component {
	getLink() {
		switch(this.props.to) {
			case '/blended-learning': return (<div>
				Understand Blended Learning by reviewing “Blended Learning & Flipped Classroom” 
				<NavLink to="/20000-video/blended-learning-video" >{this.props.children}</NavLink></div>)

			case '/blended-learning-video': return (<div>
				<ReactPlayer url='https://www.youtube.com/watch?v=paQCE58334M&vl=en-US' controls={true} width={1024} height={576} />
			</div> )

			case '/scrum-in-7-min': return (<div>
				Understand the basics of Scrum by reviewing “Introduction to Scrum in 7 Minutes”
				<NavLink to="/20000-video/scrum-in-7-min-video" >{this.props.children}</NavLink></div>)

			case '/scrum-in-7-min-video': return (<div>
				<ReactPlayer url='https://www.youtube.com/watch?v=9TycLR0TqFA' controls={true} width={1024} height={576} />
			</div> )

			case '/tools': return ( <div>
				Complete Tools of the Trade
				<NavLink to="/tools">[link]</NavLink> ~4 hours
			</div>)

			default: return ( <div><h3>Error: Link "{this.props.to}" reference not found </h3></div> )
		}
	}

	render() {
		return (
			<div> {this.getLink()}</div>
		)
	}
}

export { ALLink }