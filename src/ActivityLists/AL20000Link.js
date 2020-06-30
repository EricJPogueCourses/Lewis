import React from 'react'
import { NavLink } from "react-router-dom";
import { ALLink } from './ALLink'

class AL20000Link extends ALLink {
	getLink() {
		switch(this.props.to) {
			case '/syllabus': return ( <div>
				Review our course syllabus 
				<a href="https://botb.blob.core.windows.net/nvm4zqwm/qknzei8k-syllabus.pdf" 
				target="_blank" rel="noopener noreferrer">{this.props.children}</a></div>)

			case '/calendar': return ( <div>
				Be laser focused on due dates by reviewing our course calendar 
				<NavLink to="/calendar">[link]</NavLink></div>)

			case '/chapter-01': return ( <div>
				Read Chapter 1 of “Computer Science Illuminated” by Nell Dale and John Lewis (Dale) and review our class lecture on Chapter 1 
				<NavLink to="/video" >{this.props.children}</NavLink></div>)

			default: 
				return super.getLink()
		}
	}

	render() {
		return (
			<div> {this.getLink()}</div>
		)
	}
}

export { AL20000Link }