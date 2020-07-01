import React from 'react'
import { NavLink } from "react-router-dom";
import { ALLink } from './ALLink'
import ReactPlayer from 'react-player'

export class AL20000Link extends ALLink {
	getLink() {
		switch(this.props.to) {
			case '/syllabus': return (<div>
				Review our course syllabus 
				<a href="https://botb.blob.core.windows.net/nvm4zqwm/qknzei8k-syllabus.pdf" 
				target="_blank" rel="noopener noreferrer">{this.props.children}</a></div>)

			case '/calendar': return (<div>
				Be laser focused on due dates by reviewing our course calendar 
				<NavLink to="/calendar">[link]</NavLink></div>)

			case '/chapter-01': return (<div>
				Read Chapter 1 of “Computer Science Illuminated” by Nell Dale and John Lewis (Dale) and review chapter 1 lecture 
				<NavLink to="/20000-video/20000-chapter-01-video" >{this.props.children}</NavLink></div>)

			case '/20000-chapter-01-video': return (<div>
				<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/jlh8u41d-chapter-01-lecture.mp4' controls={true} width={1024} height={576} />
			</div> )

			case '/chapter-02': return (<div>
				Read Chapter 2 of Dale and review chapter 2 lecture 
				<NavLink to="/20000-video/20000-chapter-02-video" >{this.props.children}</NavLink></div>)

			case '/20000-chapter-02-video': return (<div>
				<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/jlh8u41d-chapter-02-lecture.mp4' controls={true} width={1024} height={576} />
			</div> )

			default: 
				return super.getLink()
		}
	}

	render() {
		return ( <div>{this.getLink()}</div>)
	}
}
