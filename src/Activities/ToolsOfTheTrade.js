import React from 'react';
import { NavLink } from 'react-router-dom';

export const Tools = () => {
	return (

<div>
<h5>Tools of the Trade</h5>
<h6>Summary: Install, configure, and utilize important software development tools</h6>
<p>Prerequisites: Windows 10 or MacOS</p>

<p>To be a successful successful software developer (and to be successful in this course) you will need to effectively 
install, configure, and utilize many tools and services. By the end of this tutorial you should be able to:</p>

<ul style={{listStyleType:'square'}}>
	<li>Utilize command line and graphical tools to navigate our computer operating system and file system</li>
	<li>Install, configure, and utilize industry standard general computing and professional software development tools and services</li>
</ul>

<p>Part 1 - In part one of the tutorial:</p>
<ol>
	<li>Install FireFox<a href='https://www.mozilla.org/en-US/firefox/new/' target='_blank' rel='noopener noreferrer'>[link]</a>and Chrome<a href='https://www.google.com/chrome/' target='_blank' rel='noopener noreferrer'>[link]</a>web browsers</li> 
	<li>Install Visual Studio Code source code editor<a href='https://code.visualstudio.com/' target='_blank' rel='noopener noreferrer'>[link]</a><NavLink to='/activity-config/mscode-and-chrome-windows10-setup'>[video]</NavLink></li>
	<li>Install the Visual Studio Code and the Python 3 programming environment<a href='https://code.visualstudio.com/docs/python/python-tutorial' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Configure Office 365 Outlook and Teams which are available to you free through Lewis University<a href='https://www.office.com/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Sign up for OReilly Safari Books Online service which is available free through Lewis University<a href='https://www.oreilly.com/library/view/temporary-access/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Utilize File Explorer (Windows) or Finder (MacOS) to manage folders, files, file 
		extensions, zip files, and hidden folders/files</li>
	<li>Utilize PowerShell (Windows)<NavLink to='/activity-config/powershell-windows10-setup'>[video]</NavLink>or 
		Terminal (MacOS)<NavLink to='/activity-config/macos-setup-terminal-finder-and-git'>[video]</NavLink>to 
		manage folders, files, zip files, and hidden folders/files</li>
	<li>Utilize Windows or MacOS screen capture<a href='https://www.theverge.com/2019/11/8/20953522/how-to-take-screenshot-mac-windows-pc-iphone-android' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Sign up for the MS Azure cloud service for Students<a href='https://azure.microsoft.com/en-us/free/students/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ol>

<p>Part 2 - In part two of the tutorial:</p>
<ol>
	<li>Install the Git command line client<a href='https://git-scm.com/'>[link]</a><NavLink to='/activity-config/git-installation-on-windows-10'>[video]</NavLink></li>
	<li>Sign up for the GitHub cloud source code management service utilizing the Student Developer Pack<a href='https://help.github.com/en/articles/applying-for-a-student-developer-pack' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		<li>Configure and utilize your GitHub account and Git client to:
		<ul style={{ listStyleType: 'square' }}>
			<li>Complete the “An Intro to Git and GitHub for Beginners” tutorial from the GitHub website<a href='https://guides.github.com/activities/hello-world/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Complete the “An Intro to Git and GitHub for Beginners” tutorial from HubSpot<a href='https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Review the “Git Handbook”<a href='https://guides.github.com/introduction/git-handbook/' target='_blank' rel='noopener noreferrer'>[link]</a>
			and the “GitHub Git Cheat Sheet”<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf' target='_blank' rel='noopener noreferrer'>[link]</a></li> 
		</ul></li>
	<li>Configure MS Office Teams from above or Discord for your Scrum team<a href='https://discord.com/' target='_blank' rel='noopener noreferrer'>[discord]</a></li>
	<li>Install Node.js and NPM<a href='https://nodejs.org/en/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Optionally install and verify Java Open SDK<a href='https://docs.microsoft.com/en-us/java/azure/jdk/?view=azure-java-stable' target='_blank' rel='noopener noreferrer'>[link]</a>
		<NavLink to='/activity-config/java-jdk-windows10-setup'>[video]</NavLink></li>
</ol>

<br />
Chocolatey (preview): You may optionally install and utilize the Chocolatey (Windows) package manager to install the 
above applications:
<ol>
	<li>Install Chocolatey with PowerShell<NavLink to='/activity-config/chocolatey'>[video]</NavLink></li>
	<li>Install VS Code, Python3, VS Code Python extension, MS Teams, Git, Node.js, and OpenJDK using Chocolatey<NavLink to='/activity-config/chocolatey-install'>[video]</NavLink>
		<a href='https://lewiseducation.blob.core.windows.net/configuration/choco-install-packages.txt' target='_blank' rel='noopener noreferrer'>[script]</a>
	</li>
</ol>
<br />
Homebrew (double preview): You may optionally install and utilize the Homebrew (MacOS) package manager to install the above applications:
<ol>
	<li>Install Homebrew with Terminal</li>
	<li>Install Homebrew and then install VS Code, Python3, VS Code Python extension, MS Teams, Git, Node.js, and OpenJDK using Homebrew
		<a href='https://lewiseducation.blob.core.windows.net/configuration/choco-install-packages.txt' target='_blank' rel='noopener noreferrer'>[script]</a>
	</li>
</ol>
</div>

	);
}

