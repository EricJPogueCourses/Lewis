
import React from 'react';
import { NavLink } from 'react-router-dom';

export const AzureWebsite= () => {
	return (
	
<div>

<br />
<h4>Azure Free Static Website Tutorial</h4>
<h5>Summary: Deploy a basic web applications that utilized HTML and CSS to Microsoft Azure</h5>
<h5>Prerequisites: Windows 10 or MacOS, Web Browser, VS Code, Microsoft Azure subscription</h5>
			
<p>Instructions: Create a free static Microsoft Azure Website and deploy an index.html Landing Page to the site using 
one of the methods demonstrated below. Test your website and make certain that your index.html Landing Page is working 
as expected.</p>
<ul style={{listStyleType:'square'}}>
	<li>Complete “Website Creation With GitHub and Microsoft Azure” (highly recommended)<NavLink to='/activity-config/github-deployment-to-azure'>[link]</NavLink></li>
	<li>Review “Git Deployment to Microsoft Azure”<NavLink to='/activity-config/git-deployment-to-azure'>[link]</NavLink></li>
	<li>Review “Eric's Azure Static Website with FTP”<NavLink to='/activity-config/my-first-website-with-ftp'>[link]</NavLink></li>
	<li>Review “Create a static HTML web application in Azure”<a href='https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-html' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ul>

<p>You should follow along and complete the steps yourself. As you go through the tutorial(s), you will need to make the 
resulting application uniquely your own by adding standard comments at the top application (i.e. your name, class, etc.), 
changing the names of variables, and adding small features.</p>

<p>Be sure to save your work so that you can submit it as part of an assignment.</p>
</div> )

}