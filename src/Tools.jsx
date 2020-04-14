
import React from 'react';
import Calendar from './Calendar';

class Tools extends React.Component {
	render() {
		return (

<div>
	<h3>Tools of the Trade</h3>
	<Calendar />
	<p>To be successful in this class you will need to be able to effectively utilize a Windows 10 or MacOS (or Linux)
	computer and the following tools and services:</p>
	<ol>
		<li>File Manager (Windows) or Finder (MacOS) to manage directory structures, folders, files, zip files, and
		hidden files</li>
		<li>PowerShell (Windows) or Terminal (MacOS) to navigate directory structures, manage folders, files, hidden
		files, and execute applications</li>
		<li>FireFox web browser
			<a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel="noopener noreferrer">[link]</a></li>
		<li>Visual Studio Code source code editor
			<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">[link] target="_blank" </a></li>
		<li>OReilly Safari Books Online technical books service which is available to you free through Lewis University
			<a href="https://www.oreilly.com/library/view/temporary-access/" target="_blank" rel="noopener noreferrer">[link]</a></li>
		<li>Office 365 cloud office suite which is also available to you free through Lewis University
			<a href="https://www.office.com/" target="_blank" rel="noopener noreferrer">[link]</a></li>
		<li>Azure cloud service for Students
			<a href="https://azure.microsoft.com/en-us/free/students/" target="_blank" rel="noopener noreferrer">[link]</a></li>
		<li>Git source code management tool
			<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">[link]</a></li>
		<li>GitHub cloud source code management service
			<a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">[link]</a></li>
		<li>Java Open SDK - Object-Oriented Programming
			<a href="https://docs.microsoft.com/en-us/java/azure/jdk/?view=azure-java-stable" target="_blank" rel="noopener noreferrer">[link]</a></li>
		<li>Node.js and NPM - Web & Distributed Programming
			<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">[link]</a></li>
	</ol>

	<p>Additional options tools that you may find beneficial include:</p>
	<ol>
		<li>Discord discussion board</li>
		<li>Microsoft Teams</li>
	</ol>
</div>

		);
	}
}

export default Tools
