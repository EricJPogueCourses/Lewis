import React from 'react';

export const CodingStandards = () => {
	return (

<div>
<br />
<h4>Coding Standards</h4>
<h5>Summary: Understand and utilize the following coding standards</h5>
<h5>Prerequisites: None</h5>

<p>Nearly all effective software development teams maintain a set of coding standards. These standards allows them to 
maintain consistency, share code more effectively, find issues quicker, and focus on the most important aspects of 
software development.</p>

<p>With this in mind, our coding standards include:</p>
<ol>
	<li>Only files required to compile and execute an application plus README.md and LICENSE files should be submitted</li>
	<li><em>All code must compile and execute without errors or warnings</em></li>
	<li>The README.md file should:
	<ol style={{listStyleType:'lower-alpha'}}>
		<li>Be the only file that contains contact and project information</li>
		<li>Include your name, the project, and your Lewis email address</li>
		<li>Include credits for all non-original content or a statement indicating that all content is original</li>
		<li>Include clear and concise build and execute instructions including a list of required files</li>
	</ol></li>
	<li>Your LICENSE file must be all rights reserved, MIT, or GNU General Public License (GPL)</li> 
	<li>Submitted zip files should extract all files into the current folder and not create subfolders</li>
	<li>All variable, function, and class naming should be description and follow CamelCase naming conventions with 
		Classes starting with a capital letter and everything else starting with lower case letters</li>
	<li>Comments should be valuable but conservative</li>
	<li>Each class should be in a separate file</li>
	<li>File names should be meaningful and consistently follow either a CamelCase or dash-case naming convention</li>
	<li>Tabs should be utilized instead of spaces for indention and only line feeds utilized (LF, /n) at the end of the
		lines</li>
	<li>Source code quotes should be single straight quotes when possible and user visible quotes should be curly
		<a href='https://typographyforlawyers.com/straight-and-curly-quotes.html' target='blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Lines should be wrapped at 100 characters</li>
	<li>All files should to be UTF-8 compatible text files</li>
	<li>Git and GitHub should be utilized to manage code</li>
	<li>Plagiarism in any form is not acceptable</li>
	<li><em>Any non-original work must be appropriately identified, credited, and validated in your README.md file</em></li>
</ol>

<br />
<p>Below are several references and examples of high quality to coding standards including:</p>
<ul style={{listStyleType:'square'}}>
	<li>Wikipedia coding standards reference<a href='https://en.wikipedia.org/wiki/Coding_conventions' target='blank' rel='noopener noreferrer'>[link]</a></li>
	<li>W3C HTML coding standards<a href='https://www.w3schools.com/html/html5_syntax.asp' target='blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Python.org Python coding standards<a href='https://www.python.org/dev/peps/pep-0008/' target='blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Google Java coding standards<a href='https://google.github.io/styleguide/javaguide.html' target='blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Oracle Java coding standards<a href='https://www.oracle.com/technetwork/java/codeconventions-150003.pdf' target='blank' rel='noopener noreferrer'>[link]</a></li> 	
</ul>
</div>

	);
}

