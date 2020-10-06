
import React from 'react';
import { NavLink } from 'react-router-dom';
export const PythonMatchMaker = () => {
	return (
	
<div>

<br />
<h4>&#10084;&#10084;&#10084; Matchmaker &#10084;&#10084;&#10084;</h4>
<h5>Summary: Create a Python application that will determine your true love.</h5>
<h5>Prerequisites: Python (v3), VS Code, Terminal, and the Python Debugger (optional) plus</h5>
<ul style={{listStyleType:'square'}}>
	<li>“Hello World with Python”<NavLink to='/activity/hello-world-python'>[link]</NavLink></li>
	<li>“Numbering Systems with Python”<NavLink to='/activity/numbering-systems-python'>[link]</NavLink></li>
</ul>
			
<p>In this assignment you will develop and test a python application that asks questions to determine if a person is 
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

<p>If you are looking for some examples of what this application might look like if Dr. Klump was creating it, you can 
see it here <NavLink to='/activity/match-maker-examples'>[link]</NavLink>. I’m sure you can improve on his design. 
</p>

<em>Requirement 1</em>
<p>Create a command-line Python application that:</p>
<ol>
	<li>Is implemented in a single Python3 (.py) file name “MatchMaker_xx.py” where “xx” are your initials in lower case</li>
	<li>Successfully executes from the command line by typing “python3 MatchMaker_xx.py” </li>
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
	<li>Validates user input, displays an meaningful error message, and asks the question again if the user enters 
		something other than “1” through “5”</li>
</ol>

<em>Requirement 4</em>
<p>Finally test and refactor the application so that it:</p>
<ol>
	<li>Utilizes constants at the top of the Python file for <em>all</em> desired answers and question weightings</li>
	<li>Utilizes a single function called “validate” to validate user input and displays and error message for all questions</li>
</ol>

</div> )

}