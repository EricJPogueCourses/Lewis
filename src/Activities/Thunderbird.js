
import React from 'react'
import { NavLink } from 'react-router-dom'

export const ThunderbirdJava  = () => { return Thunderbird(ThunderbirdJavaProperties) }

const ThunderbirdJavaProperties = {
	'name': 'Thunderbird', 
	'language': 'Java graphical',
	'prerequisites': 'Java, VS Code, and Terminal',
	'type': 'graphical application written in the Java language',
	'requirement1_1': 'Is implemented in multiple Java (.java) files with the main file named “Thunderbird.java”',
	'requirement1_2': 'Successfully compiles from the command line using “javac *.java” and executes by typing “java Thunderbird”'
}

const Thunderbird = (appProps) => {
	return (
	
<div>
<br />
<h4>{appProps.name}</h4>
<h5>Summary: Enhance a {appProps.language} application that implements a virtual seating chart for your classmates and 
their favorite super heros.
</h5>
<h5>Prerequisites: </h5>
<ol>
	<li>{appProps.prerequisites}</li>
	<li>“ThunderbirdLite”<NavLink to='/activity-oop/java-thunderbird-lite'>[video]</NavLink></li>
	<li>“Personal Information JSON Files”<NavLink to='/activity-oop/personal-info-json-to-azure'>[video]</NavLink></li>
	<li>“SleepFast”<NavLink to='/activity-oop/java-sleep-fast'>[video]</NavLink></li>
</ol>
<p>Thunderbird is an activity that leverages the knowledge that you have gained in previous activities (graphical, 
distributed, and multithreaded programming) to create a visually appealing virtual seating chart. We will utilize 
the data from the JSON files that we created and deployed previously to place each of your classmates and their 
associate super heroes (or book characters) in the seat identified in the JSON file.</p>

<p>The requirements below assume that you are utilizing the enhanced ThunderbirdLite source code as your starting point. 
You will want to copy this source code into your initial Thunderbird repository, review it carefully (it is very similar 
to what you created in ThunderbirdLite), and then utilize the code as the starting point for this Thunderbird activity.</p> 


<h5>Specific requirements for the application include:</h5>
<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>{appProps.requirement1_1}</li>
	<li>{appProps.requirement1_2}</li>
</ol>

<h1>*********</h1>
<em>Requirement 2</em>
<p>Enhance your application by implementing an HTTPRequest feature that:</p>
<ol>
	<li>Responds to the “-HttpRequest [URL]” command-line parameter assuming case insensitivity</li>
	<li>Retrieves the data from the URL and stores the data from the URL in memory</li>
	<li>Prints the data to the command-line</li>
	<li>Is implemented in a separate source code file</li>
</ol>

<em>Requirement 3</em>
<p>Enhance your application by implementing a help feature that it:</p>
<ol>
	<li>Responds to the “-Help” command-line parameter assuming case insensitivity</li>
	<li>Implements visually appealing detailed instructions on how to use the application</li>
	<li>Provides fully tested copy/paste examples of each application feature</li>
	<li>Is implemented in a separate source code file</li>
</ol>

<em>Requirement 4</em>
<p>Enhance your application by implementing an HTTPRequestIndex feature that it:</p>
<ol>
	<li>Responds to the “-HttpRequestIndex [URL]” command-line parameter assuming case insensitivity</li>
	<li>Opens the following JSON index file<a href='https://thunderbird-index.azurewebsites.net/w0a6zk195d.json' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Parses the index file for the additional URLs</li>
	<li>Retrieves the data from each additional URL</li>
	<li>Prints the index data followed by each individual URL data elegantly to the command-line</li>
	<li>Is implemented in a separate source code file</li>
</ol>
</div> )
}
