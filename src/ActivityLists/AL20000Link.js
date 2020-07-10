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
				Read Chapter 1 of “Computer Science Illuminated” by Nell Dale and John Lewis (Dale) and review our 
				chapter 1 lecture 
				<NavLink to="/20000-video/20000-chapter-01-video" >{this.props.children}</NavLink></div>)

			case '/20000-chapter-01-video': return (<div>
				<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/jlh8u41d-chapter-01-lecture.mp4' controls={true} width={1024} height={576} />
			</div> )

			case '/chapter-02': return (<div>
				Read Chapter 2 of Dale and review our chapter 2 lecture 
				<NavLink to="/20000-video/20000-chapter-02-video" >{this.props.children}</NavLink></div>)

			case '/20000-chapter-02-video': return (<div>
				<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/jlh8u41d-chapter-02-lecture.mp4' controls={true} width={1024} height={576} /></div> )


			case '/tools-part1': return ( <div>
				Complete Tools of the Trade through item “6. Install the Visual Studio Python 3 programming environment”
				<NavLink to="/tools">[link]</NavLink> ~3 hours </div>)

			case '/hello-world-python': return (<div>
				Complete “Hello World with Python” tutorial 
				<NavLink to="/20000-video/hello-world-python-video" >{this.props.children}</NavLink></div>)

			case '/hello-world-python-video': return (<div>
				<h4>Hello World with Python tutorial</h4>
				<h5>Summary: Create Hello World utilizing Python, VS Code, Terminal, and the Python Debugger</h5>
				<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/s44aopq9-hello-world.mp4' controls={true} width={1024} height={576} />
				<p>As in all tutorials, you should follow along and complete the steps yourself. As you go through 
					the tutorial, make the resulting application uniquely your own by adding standard comments at the 
					top application (i.e. your name, class, etc.), changing the names of variables, and adding small 
					features. Finally, be sure to save your work as you will often be asked to submit it as part 
					of your lab assignment.</p></div> )

			case '/numbering-systems-python': return (<div>
				Complete “Numbering Systems with Python” tutorial
				<NavLink to="/20000-video/numbering-systems-python-video" >{this.props.children}</NavLink></div>)

			case '/numbering-systems-python-video': return (<div>
				<h4>Numbering Systems with Python tutorial</h4>
				<h5>Summary: Convert between various Numbering Systems utilizing Python</h5>
				<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/s44aopq9-numbering-systems-with-python.mp4' controls={true} width={1024} height={576} />
				<p>Be sure to follow along, complete the steps yourself, add elements to make the application uniquely 
				your own, and be prepared to submit your work as part of your lab assignment.</p>
				<p>Additional references:</p>
				<ul style={{ listStyleType: "square" }}>
					<li>Source code for tutorial
						<a href="https://botb.blob.core.windows.net/nvm4zqwm/s44aopq9-numbering-systems-with-python.zip">[link]</a></li>
					<li>Getting Started with Python in VS Code tutorial
						<a href="https://code.visualstudio.com/docs/python/python-tutorial">[link]</a></li> 
					<li>Configure and Run the Python Debugger
						<a href="https://code.visualstudio.com/docs/python/python-tutorial#_configure-and-run-the-debugger"
						target="_blank" rel="noopener noreferrer">[link]</a></li> 
				</ul></div> )

			default: 
				return super.getLink()
		}
	}

	render() {
		return ( <div>{this.getLink()}</div>)
	}
}
