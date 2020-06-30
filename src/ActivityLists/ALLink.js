import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class ALLink extends Component {
	getLink() {
		switch(this.props.to) {
			case '/blended-learning': return ( <div>
				Understand Blended Learning by reviewing "Blended Learning & Flipped Classroom" 
				<a href="https://www.youtube.com/watch?v=paQCE58334M&vl=en-US" 
				target="_blank" rel="noopener noreferrer">{this.props.children}</a></div>)

			case '/scrum-in-7-min': return ( <div>
				Understand the basics of Scrum by reviewing “Introduction to Scrum in 7 Minutes”
				<a href="https://www.youtube.com/watch?v=9TycLR0TqFA"
				target="_blank" rel="noopener noreferrer">{this.props.children}</a></div>)

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