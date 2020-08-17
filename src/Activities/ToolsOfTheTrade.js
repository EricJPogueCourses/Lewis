import React from 'react';
import { NavLink } from 'react-router-dom';

export const Tools = () => {
	return (

<div>
<h5>Tools of the Trade</h5>
<h6>Summary: Install, configure, and utilize important software development tools</h6>
<p>Prerequisites: Windows 10 or MacOS</p>

<p>To be a successful successful software developer (and to be successful in this course) you will need to effectively 
utilize many tools and services. In this tutorial we will install, configure, and utilize numerous tools and services. 
By the end of this tutorial you should be able to:</p>

<ul style={{listStyleType:'square'}}>
	<li>Utilize command line and graphical tools to navigate our computer operating system and file system</li>
	<li>Create, edit, and update source code in a the Visual Studio Code source code editor</li>
	<li>Effectively utilize industry standard tools to create, update, and submit basic software applications</li>	
	<li>Manage source code utilizing the GitHub and the Git command line and Web clients</li>
</ul>

<p>Part 1 - In part one of the tutorial:</p>
<ol>
	<li>Install FireFox<a href='https://www.mozilla.org/en-US/firefox/new/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and Chrome<a href='https://www.google.com/chrome/' target='_blank' rel='noopener noreferrer'>[link]</a>web browsers</li> 
	<li>Install Visual Studio Code source code editor<a href='https://code.visualstudio.com/' target='_blank' rel='noopener noreferrer'>[link]</a>
		<NavLink to='/activity-config/mscode-and-chrome-windows10-setup'>[video]</NavLink></li>
	<li>Install the Visual Studio Code Python 3 programming environment
		<a href='https://code.visualstudio.com/docs/python/python-tutorial' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Configure the Web version Install Microsoft 365 Word, Excel, PowerPoint, and Teams which are available free through Lewis University
		<a href='https://www.office.com/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Sign up for OReilly Safari Books Online service which is available free through Lewis University
		<a href='https://www.oreilly.com/library/view/temporary-access/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Configure and utilize File Manager (Windows) or Finder (MacOS) to navigate and manage folders, files, file 
		extensions, zip files, and hidden folders/files</li>
	<li>Install or update MS Windows PowerShell if you are utilizing MS Windows<NavLink to='/activity-config/powershell-windows10-setup'>[video]</NavLink></li>
	<li>Configure and utilize PowerShell (Windows) or Terminal (MacOS) to navigate and manage folders, files, zip files, hidden 
		folders/files</li>
	<li>Utilize Windows or MacOS screen capture
		<a href='https://www.theverge.com/2019/11/8/20953522/how-to-take-screenshot-mac-windows-pc-iphone-android' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Sign up for the MS Azure cloud service for Students
		<a href='https://azure.microsoft.com/en-us/free/students/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ol>

<p>Part 2 - In part two of the tutorial:</p>
<ol>
	<li>Install the Git command line client<a href='https://git-scm.com/'>[link]</a><NavLink to='/activity-config/git-installation-on-windows-10'>[video]</NavLink></li>
	<li>Sign up for the GitHub cloud source code management service utilizing the Student Developer Pack
		<a href='https://help.github.com/en/articles/applying-for-a-student-developer-pack'>[link]</a></li>
		<li>Utilize your GitHub account and Git client to:
		<ul style={{ listStyleType: 'square' }}>
				<li>Complete the “An Intro to Git and GitHub for Beginners” tutorial from the GitHub website
					<a href='https://guides.github.com/activities/hello-world/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
				<li>Complete the “An Intro to Git and GitHub for Beginners” tutorial from HubSpot 
					<a href='https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners' target='_blank' rel='noopener noreferrer'>[link]</a></li>
				<li>Review the “Git Handbook” guide
					<a href='https://guides.github.com/introduction/git-handbook/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
				<li>Review GitHub Git Cheat Sheet
					<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf' target='_blank' rel='noopener noreferrer'>[link]</a></li> 
		</ul></li>
		<li>Install Discord or Microsoft Teams and set up a team forum with your Scrum team
			<a href='https://discord.com/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Install Node.js and NPM
		<a href='https://nodejs.org/en/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Optionally install Java Open SDK
		<a href='https://docs.microsoft.com/en-us/java/azure/jdk/?view=azure-java-stable' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ol>
{/* Review from 44000:
	<li>Review navigation of your computer local file system utilizing MacOS terminal, 
		<a href='https://cpsc201908fallsa.blob.core.windows.net/classrecordings/macos-setup-terminal-finder-and-git.mp4'>[video]</a>, 
		MS Windows PowerShell
		<a href='http://mediaatoz.blob.core.windows.net/environment-configuration/powershell-windows10-setup.mp4'>[video]</a>,
		or Linux</li>
	<li>Install the Git command line client 
		<a href='https://mediaatoz.blob.core.windows.net/environment-configuration/git-installation-on-windows-10.mp4'>[video]</a>
		<a href='https://git-scm.com/' target='_blank' rel='noopener noreferrer'>[git]</a></li>
	<li>Create a GitHub account 
		<a href='https://help.github.com/' target='_blank' rel='noopener noreferrer'>[link]</a>
		optionally utilizing the Student Developer Pack
		<a href='https://help.github.com/en/articles/applying-for-a-student-developer-pack' target='_blank' rel='noopener noreferrer'>[link]</a> (recommended)</li>
	<li>Become comfortable with using Git and GitHub to manage development documents by completing the following tutorials:
	<ul style={{ listStyleType: 'square' }}>
		<li>“An Intro to Git and GitHub for Beginners” from the GitHub website
			<a href='https://guides.github.com/activities/hello-world/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		<li>“An Intro to Git and GitHub for Beginners” from HubSpot 
			<a href='https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		<li>Review the “Git Handbook” guide
			<a href='https://guides.github.com/introduction/git-handbook/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	</ul></li>
	<li>Install the Microsoft Visual Studio Code text editor and the FireFox or Chrome web browser
		<a href='https://mediaatoz.blob.core.windows.net/environment-configuration/mscode-and-chrome-windows10-setup.mp4'>
			[video]</a>
		<a href='https://code.visualstudio.com/' target='_blank' rel='noopener noreferrer'>[code]</a>
		<a href='https://www.mozilla.org/en-US/firefox/' target='_blank' rel='noopener noreferrer'>[firefox]</a>
		<a href='https://www.google.com/chrome/' target='_blank' rel='noopener noreferrer'>[chrome]</a></li>

	<li>Setup a Microsoft Azure Student account
		<a href='https://azure.microsoft.com/en-us/free/students/' target='_blank' rel='noopener noreferrer'>[link]</a>,
		or set up a regular Azure account with a free trial subscription
		<a href='https://azure.microsoft.com/en-us/free/' target='_blank' rel='noopener noreferrer'>[link]</a></li>

		<p>Additional references:</p>
<ul>
	<li>Activate the Microsoft 365 account that is available to you free through Lewis University by going to the
		Office 365 website
		<a href='https://www.office.com' target='_blank' rel='noopener noreferrer'>[link]</a> and signing in with your Lewis University ID
		(<em>username</em>@lewisu.edu) password</li>
	<li>Git/GitHub Cheat Sheet 
		<a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf' target='_blank' rel='noopener noreferrer'>[link]</a></li> 
</ul>

	<li>Sign up for Safari Books Online which is available to you free through Lewis University
		<a href='https://www.oreilly.com/library/view/temporary-access/' target='_blank' rel='noopener noreferrer'>[link]</a></li>

			<li>Activate the Microsoft 365 account that is available to you free through Lewis University by going to the
		Office 365 website and install the products as needed to up to 5 devices
		<a href='https://www.office.com' target='_blank' rel='noopener noreferrer'>[link]</a> and signing in with your Lewis University ID</li>



From OOP:
	<li>Install or update MS Windows PowerShell if you are utilizing MS Windows
		<a href='http://mediaatoz.blob.core.windows.net/environment-configuration/powershell-windows10-setup.mp4'>
		[video]</a></li>
	<li>Review navigation of your computer local file system utilizing MS Windows PowerShell, MS Windows command prompt,
		MacOS terminal, or your preferred Linux shell</li>
	<li>Install and verify the Java SDK and associated command line tools
		<a href='https://mediaatoz.blob.core.windows.net/environment-configuration/java-jdk-windows10-setup.mp4'>
		[video]</a></li>
	<li><em>Create your initial Discussion Board 1 post by the middle of the sprint</em></li>
	<li>Install the Microsoft Visual Studio Code text editor and the Google Chrome web browser
		<a href='https://mediaatoz.blob.core.windows.net/environment-configuration/mscode-and-chrome-windows10-setup.mp4'>
		[video]</a>
		<a href='https://www.google.com/chrome/' target='_blank' rel='noopener noreferrer'>[chrome]</a>
		<a href='https://code.visualstudio.com/'>[code]</a></li>

			<li>If you don’t already have a GitHub account, set up a GitHub account utilizing the Student Developer Pack
		<a href='https://help.github.com/en/articles/applying-for-a-student-developer-pack'>[link]</a></li>
	<li>Install the Git command line client
		<a href='https://mediaatoz.blob.core.windows.net/environment-configuration/git-installation-on-windows-10.mp4'>
		[video]</a>
		<a href='https://git-scm.com/'>[link]</a></li>
	<li>Utilize your GitHub account and Git client to:
		<ul style={{ listStyleType: 'square' }}>
			<li>Complete the “An Intro to Git and GitHub for Beginners” tutorial from the GitHub website
				<a href='https://guides.github.com/activities/hello-world/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Complete the “An Intro to Git and GitHub for Beginners” tutorial from HubSpot 
				<a href='https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Review the “Git Handbook” guide
				<a href='https://guides.github.com/introduction/git-handbook/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
		</ul></li>

			<li>If you do not already have access to a current version of Microsoft Office, install the current
		Microsoft PowerPoint (PowerPoint Mobile) and Word (Word Mobile) viewers
		<a
		href='http://mediaatoz.blob.core.windows.net/environment-configuration/powerpoint-mobile-viewer-installation.mp4'>[video]</a>
		<a
		href='https://www.microsoft.com/en-us/p/powerpoint-mobile/9wzdncrfjb5q?activetab=pivot%3Aoverviewtab'>[link]</a></li>

			<li>If you do not already have access to a current version of Microsoft Office, install the current
		Microsoft PowerPoint (PowerPoint Mobile) and Word (Word Mobile) viewers
		<a
		href='http://mediaatoz.blob.core.windows.net/environment-configuration/powerpoint-mobile-viewer-installation.mp4'>[video]</a>
		<a
		href='https://www.microsoft.com/en-us/p/powerpoint-mobile/9wzdncrfjb5q?activetab=pivot%3Aoverviewtab'>[link]</a></li>

				<li>Setup a Microsoft Azure account with a free trial subscription
			<a href='https://azure.microsoft.com/en-us/free/' target='_blank' rel='noopener noreferrer'>[link]</a>. Although your free
			trial will last 30 days, you will need to provide a credit card. You will also want to watch what
			types of resources you access on your Azure account so that when you convert the account to
			“pay-as-you-go“, you will not experience any significant charges. For this class I will be guiding
			you toward free or very low-cost cloud resources.</li>

*/}
</div>



	);
}

