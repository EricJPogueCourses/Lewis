
import React from 'react'
import MosaicScreenshot from './MosaicScreenshot.png'

export const MosaicJava  = () => { return Mosaic(MosaicJavaProperties) }
export const MosaicWeb   = () => { return Mosaic(MosaicWebProperties) }
export const MosaicReact = () => { return Mosaic(MosaicReactProperties) }

const MosaicWebProperties = {
	'name': 'Mosaic for the Web', 
	'language': 'Web',
	'prerequisites': 'HTML, CSS, JavaScript, VS Code, and Terminal',
	'type': 'Web application using HTML, CSS, and JavaScript',
	'requirement1_1': 'Is implemented in a single file name “index.html”',
	'requirement1_2': 'Is hosted as a public website in Microsoft Azure'
}

const MosaicJavaProperties = {
	'name': 'Mosaic with Java', 
	'language': 'Java graphical',
	'prerequisites': 'Java, VS Code, and Terminal',
	'type': 'graphical application written in the Java language',
	'requirement1_1': 'Is implemented in multiple Java (.java) files with the main file named “Mosaic.java”',
	'requirement1_2': 'Successfully compiles from the command line using “javac *.java” and executes by typing “java Mosaic'
}

const MosaicReactProperties = {
	'name': 'Mosaic with React', 
	'language': 'React',
	'prerequisites': 'React, HTML, CSS, JavaScript, VS Code, and Terminal',
	'type': 'Web application using React, HTML, CSS, and JavaScript',
	'requirement1_1': 'Is implemented as a standard React application',
	'requirement1_2': 'Is hosted as a public website in Microsoft Azure'
}	

const Mosaic = (appProps) => {
	return (
	
<div>
<br />
<h4>{appProps.name}</h4>
<h5>Summary: Create a {appProps.language} application that will draw random graphical faces.
</h5>
<h5>Prerequisites: {appProps.prerequisites}</h5>

<p>In this programming activity, you will create a colorful pattern of shapes and letters. At a minimum it needs to 
include randomly colored circles and squares with centered randomly colored letters in the center of each shape. No 
matter what color the shape is, the color of the letter should make the letter visible.</p>

<p>The application will be interactive in that it will modify all shapes, letters, and colors each time a  
“Randomize” button is pressed. Note that the shapes, letters and colors should not randomize in response to events
like the windows resizing.</p>

<p>Your Mosaic implementation could look something like:</p>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<img src={MosaicScreenshot} alt='Eric Pogue' width= '512'/>
</div>
<br />
<h5>Specific requirements for the application include:</h5>
<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>{appProps.requirement1_1}</li>
	<li>{appProps.requirement1_2}</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Creates and draws a 12x12 grid of circles and squares of random colors</li>
	<li>Resizes each circle and square as the window is resized</li>
	<li>Retains the color of each shape as the window is resized</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that when it starts it:</p>
<ol>
	<li>Draws a capital letter at the center of each shape</li>
	<li>Draws the letter in a visually appealing color</li>
	<li>Maintains the capital letter at the exact center of the shape as the windows is resized</li>
	<li>Retains the color of each letter as the window is resized</li>
</ol>

<em>Requirement 4</em>
<p>Enhance the application so that it:</p>
<ol>
	<li>Implements a “Randomize” button</li>
	<li>Re-randomizes all of the shapes, letters, and colors when the button is pressed</li>
	<li>Responds to a mouse click on shape by replacing that shape and letter with a FaceDraw face</li>
	<li>Responds to a mouse click on a FaceDraw face by returning it to its previous shape, letter, and color</li>
</ol>
</div> )
}