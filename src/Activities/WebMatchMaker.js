
import React from 'react';
import { NavLink } from 'react-router-dom';
export const WebMatchMaker = () => {
	return (
	
<div>

<br />
<h4><span style={{color: "red"}}>&#10084;&#10084;&#10084;</span> Matchmaker Web<span style={{color: "red"}}>&#10084;&#10084;&#10084;</span></h4>
<h5>Summary: Create a Web application utilizing HTML, CSS, and JavaScript that will determine your true love.</h5>
<h5>Prerequisites: VS Code, Terminal, and the Python Debugger (optional) plus</h5>
<ul style={{listStyleType:'square'}}>
	<li>“Getting to Know Each Other”<NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>
	<li>“Azure Website 2020 Edition”<NavLink to='/activity/azure-website-supplemental-2020'>[link]</NavLink></li>
	<li>“Azure Website”<NavLink to='/activity/azure-website'>[link]</NavLink></li>
	<li>“Python Matchmaker” (optional)<NavLink to='/activity/match-maker'>[link]</NavLink></li>
</ul>

<p>In this assignment you will implement a Web version of Matchmaker using HTML, CSS, and JavaScript and host it in
the Azure cloud. With the exception of “Requirement 1”, the description of the application and the requirements remain 
the same as in the Python version of Matchmaker<NavLink to='/activity/match-maker'>[link]</NavLink></p>

<p>In this assignment you will develop and test a Web application that asks questions to determine if a person is 
your true love. More specifically your application should ask five questions in the form of statements and allow the 
user to respond to each statement with the numbers 1 through 5 with 1 indicating strongly disagree and 5 indicating 
strongly agree. You will then compare the person’s answers with your desired “true love” answers. The closer the 
answers are to your desired “true love” answers the better match the two of you are for each other.</p>

<p>For example, suppose you choose the statement “Broccoli is delicious.” and your desired answer was 1 (strongly 
disagree) because you really don’t like broccoli. If the application user entered 4 (agree), then the two of you would 
not be a very good match based on that question. In the broccoli example above you would want to calculate your 
<em> question compatibility score</em> for this question by taking the absolute value of the difference between their answer and 
your desired answer. In addition, each question should have a weighting of 1 to 3 based on how important that question 
is to you. For example, the “Broccoli is delicious.” statement may only have a weighting of 1 where a “I could play 
Fortnight for hours.” question may be more important to you and deserve a weighting of 3.</p>

<p>After all five questions are answered, you will need to add up the <em>weighted question compatibility scores </em> 
for each of the five questions and subtract the value from 100 to calculate a final <em>compatibility score</em> that
has a maximum value of 100.</p>

<p>You will also need to set three threshold scores. One for true love, one for possible friends, and one for run away. 
You utilize your programming knowledge, creativity, and good taste to set and adjust the thresholds, phase the results, 
and share the results to the user. Be sure to review and test your ideas for the application with a friend or classmate 
to get some usability feedback.</p>

<em>Requirement 1</em>
<p>Create a Web application using HTML, CSS, and JavaScript that:</p>
<ol>
	<li>Is implemented in a single file name “index.html”</li>
	<li>Is hosted as a public website in Microsoft Azure</li>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Includes user instructions that succinctly describes the application and how it works</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Asks five questions as described above</li>
	<li>Calculates the <em>weighted question compatibility score</em> score for each question</li>
	<li>Calculates the total weighted compatibility scores across all questions</li>
	<li>Calculates the total <em>compatibility score</em> across all questions</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that it:</p>
<ol>
	<li>Provides excellent end user instruction when the application starts</li>
	<li>Only allows users to submit valid input where possible</li>
	<li>Displays an meaningful error message, and asks the question again if the user enters something other than “1” 
		through “5”</li>
</ol>

<em>Requirement 4</em>
<p>Finally test and refactor the application so that it:</p>
<ol>
	<li>Utilizes constants at the top of the JavaScript for <em>all</em> desired answers and question weightings</li>
	<li>Utilizes a single function called “validate” to validate user input and displays and error message for all 
		questions as needed</li>
</ol>

</div> )

}