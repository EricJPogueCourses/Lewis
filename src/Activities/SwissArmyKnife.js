
import React from 'react'

export const SwissArmyKnifeJava  = () => { return Mosaic(MosaicJavaProperties) }

const SwissArmyKnifeJavaJavaProperties = {
	'name': 'SwissArmyKnife with Java', 
	'language': 'Java command-line (CLI)',
	'prerequisites': 'Java, VS Code, and Terminal',
	'type': 'command-line application written in the Java language',
	'requirement1_1': 'Is implemented in multiple Java (.java) files with the main file named “sak.java”',
	'requirement1_2': 'Successfully compiles from the command line using “javac *.java” and executes by typing “java sak'
}

const SwissArmyKnife = (appProps) => {
	return (
	
<div>
<br />
<h4>{appProps.name}</h4>
<h5>Summary: Create a {appProps.language} application that performs a variety functions.
</h5>
<h5>Prerequisites: {appProps.prerequisites}</h5>

<p>In this programming activity, you will create a command-line application that implements various functions focused on 
distributed computing and web services. </p>

<p>Specific requirements for the application include:</p>
<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>{appProps.requirement1_1}</li>
	<li>{appProps.requirement1_2}</li>
</ol>

<em>Requirement 2</em>
<p>Enhance your application by implementing a help feature that it:</p>
<ol>
	<li>Responds to the “-Help” command-line parameter assuming case insensitivity</li>
	<li>Implements visually appealing detailed instructions on how to use the application</li>
	<li>Provides fully tested copy/paste examples of each application feature</li>
	<li>Is implemented in a separate Java file</li>
</ol>

<em>Requirement 3</em>
<p>Enhance your application by implementing an HTTPRequest feature that it:</p>
<ol>
	<li>Responds to the “-HttpRequest [URL]” command-line parameter assuming case insensitivity</li>
	<li>Retrieves the data from the URL and stores the data from the URL in memory</li>
	<li>Prints the data to the command-line</li>
	<li>Is implemented in a separate Java file</li>
</ol>

<em>Requirement 4</em>
<p>Enhance your application by implementing an HTTPRequestIndex feature that it:</p>
<ol>
	<li>Responds to the “-HttpRequestIndex [URL]” command-line parameter assuming case insensitivity</li>
	<li>Opens the following JSON index file<a href='https://thunderbird-index.azurewebsites.net/w0a6zk195d.json' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Parses the index file for the additional URLs</li>
	<li>Retrieves the data from each additional URL</li>
	<li>Prints the index data followed by each individual URL data elegantly to the command-line</li>
	<li>Is implemented in a separate Java file</li>
</ol>
</div> )
}