
import React from 'react';
import { NavLink } from 'react-router-dom';

export const AzureWebsite= () => {
	return (
	
<div>

<br />
<h4>Azure Website</h4>
<h5>Summary: Deploy a basic web applications that utilizes HTML and CSS to Microsoft Azure</h5>
<h5>Prerequisites: Windows 10 or MacOS, Web Browser, VS Code, Microsoft Azure subscription</h5>
			
<p>Instructions: Create a free static Microsoft Azure Website and deploy an index.html Landing Page to the site using 
one of the methods demonstrated below. Test your website and make certain that your index.html Landing Page is working 
as expected.</p>
<ul style={{listStyleType:'square'}}>
	<li>Complete “Website Creation with GitHub and Microsoft Azure - 2020 Supplemental Edition” (highly recommended)<NavLink to='/activity-config/git-deployment-to-azure-supplemental-2020'>[link]</NavLink></li>
	<li>Review “Website Creation With GitHub and Microsoft Azure”<NavLink to='/activity-config/github-deployment-to-azure'>[link]</NavLink></li>
	<li>Review “Git Deployment to Microsoft Azure”<NavLink to='/activity-config/git-deployment-to-azure'>[link]</NavLink></li>
	<li>Review “Eric's Azure Static Website with FTP”<NavLink to='/activity-config/my-first-website-with-ftp'>[link]</NavLink></li>
	<li>Review “Create a static HTML web application in Azure”<a href='https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-html' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ul><br />

<h5>Frequently Asked Questions:</h5>
Question 1: Why do I receive an message that says “You do not have permission to view this directory or page.” when I enter the URL in my browser<br />
Do you have an “index.html” file? If you main HTML file is something other than “index.html”, you 
need to include the name of the HTML file in the URL to access the page.<br /><br />
Question 2: Why does nothing comes up when I enter the URL in my browser<br />
What did you pick for a server-side environment? My recommendation for a static site is PHP.<br /><br />
Question 3: What should I do if I forgot my Azure (or GitHub) password?<br />
Don’t forget your Azure (or GitHub) password, or reset your password. If you are not able to reset your password, you 
will need to create a new account.
</div> )

}