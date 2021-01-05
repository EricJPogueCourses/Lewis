
import React from 'react';
import { NavLink } from 'react-router-dom';

const MatchmakerPythonProperties = {
	'name': 'Matchmaker with Python', 
	'language': 'Python',
	'prerequisites': 'Python (v3), VS Code, and Terminal',
	'type': 'command-line application written in the Python language',
	'requirement1_1': 'Is implemented in a single Python (.py) file named “MatchMaker_xx.py” where “xx” are your initials in lower case',
	'requirement1_2': 'Successfully executes from the command line by typing “python3 MatchMaker_xx.py'
}

export const MatchmakerPython = () => {
	return Matchmaker(MatchmakerPythonProperties)
}

const MatchmakerWebProperties = {
	'name': 'Matchmaker for the Web', 
	'language': 'Web',
	'prerequisites': 'HTML, CSS, JavaScript, VS Code, and Terminal',
	'type': 'Web version of Matchmaker using HTML, CSS, and JavaScript',
	'requirement1_1': 'Is implemented in a single file name “index.html”',
	'requirement1_2': 'Is hosted as a public website in Microsoft Azure'
}

export const MatchmakerWeb = () => {
	return Matchmaker(MatchmakerWebProperties)
}

const MatchmakerJavaProperties = {
	'name': 'Matchmaker with Java', 
	'language': 'Java',
	'prerequisites': 'Java, VS Code, and Terminal',
	'type': 'command-line application written in the Java language',
	'requirement1_1': 'Is implemented in a single Java (.java) file named “MatchMaker.java”',
	'requirement1_2': 'Successfully compiles with “javac MatchMaker.java" and successfully executes with “java MatchMaker'
}

export const MatchmakerJava = () => {
	return Matchmaker(MatchmakerJavaProperties)
}

const MatchmakerGoProperties = {
	'name': 'Matchmaker with Go', 
	'language': 'Go',
	'prerequisites': 'Go, VS Code, and Terminal',
	'type': 'command-line application written in the Go language',
	'requirement1_1': 'Is implemented in a single Go (.go) file named “MatchMaker_xx.go” where “xx” are your initials in lower case',
	'requirement1_2': 'Successfully executes from the command line by typing “go MatchMaker_xx.go'
}

export const MatchmakerGo = () => {
	return Matchmaker(MatchmakerGoProperties)
}

export const Matchmaker = (app) => {
	return (
	
<div>
<br />
<h4><span style={{color: "red"}}>&#10084;&#10084;&#10084;</span> {app.name} <span style={{color: "red"}}>&#10084;&#10084;&#10084;</span></h4>
<h5>Summary: Create a {app.language} application that will determine your true love</h5>
<h5>Prerequisites: {app.prerequisites}</h5>

<p>In this assignment you will develop and test a {app.type} that asks questions to determine if a person is your 
true love. More specifically your application should ask five questions in the form of statements and allow the 
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

<p>After all five questions are answered, you will need to add up the <em>weighted question compatibility scores</em> 
for each of the five questions and subtract the value from 100 to calculate a final <em>compatibility score</em> that
has a maximum value of 100.</p>

<p>You will also need to set three threshold scores. One for true love, one for possible friends, and one for run away. 
You utilize your programming knowledge, creativity, and good taste to set and adjust the thresholds, phase the results, 
and share the results to the user. Be sure to review and test your ideas for the application with a friend or classmate 
to get some usability feedback.</p>

<p>If you are looking for some examples of what this application might look like if it was a command line application 
and Dr. Klump was creating it, you can see it here <NavLink to='/activity/matchmaker-examples'>[link]</NavLink>. I’m 
sure you can improve on his design. 
</p>

<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>{app.requirement1_1}</li>
	<li>{app.requirement1_2}</li>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Includes user instructions that succinctly describes the application and how it works</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Asks five questions as described above</li>
	<li>Calculates <em>question compatibility scores</em> and <em>weighted question compatibility scores</em> for each question</li>
	<li>Calculates the total weighted compatibility scores across all questions</li>
	<li>Calculates the total <em>compatibility score</em> across all questions</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that it:</p>
<ol>
	<li>Displays a summary of each question’s compatibility score and weighted compatibility score</li>
	<li>Displays a summary of the overall weighted compatibility score as a percentage</li>
	<li>Displays an interesting closing remark based on predetermined compatibility ranges</li>
	<li>Validates user input, displays meaningful error messages, and asks the question again if the user enters 
		invalid text</li>
</ol>

<em>Requirement 4</em>
<p>Finally test and refactor the application so that it:</p>
<ol>
	<li>Utilizes constants at the top of the file or in a separate file for <em>all</em> desired answers, question weightings,
		and compatibility ranges</li>
	<li>Utilizes a single function called “validate” to validate user input and displays and error message for all questions</li>
</ol>

</div> )

}