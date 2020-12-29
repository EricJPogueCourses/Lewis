
import React from 'react';
import { NavLink } from 'react-router-dom';

import PythonHealthRiskBloodPressure from './PythonHealthRiskBloodPressure.png';
import PythonHealthRiskBodyMassIndex from './PythonHealthRiskBodyMassIndex.png';

export const PythonHealthRiskCalculator = () => {
	return (
	
<div>

<br />
<h4>Health Insurance Risk Calculator</h4>
<h5>Summary: Create a application that will calculate the health risk of a new customer of an insurance company. The 
application can be created as either a Terminal based Python application or as a Web application utilizing HTML, 
CSS, and JavaScript.
</h5>
<h5>Prerequisites:</h5>
<ul style={{listStyleType:'square'}}>
	<li>“Matchmaker” with Python<NavLink to='/activity/match-maker'>[link]</NavLink></li>
	<li>Or “Matchmaker for the Web”<NavLink to='/activity/web-matchmaker'>[link]</NavLink></li>
</ul>

<p>In this assignment, you will create a tool a health insurance company could use to determine the risk associated with 
insuring a new customer. The amount of risk will be determined by the body-mass index, blood pressure, age, and family 
history of disease.</p>

<p>Blood pressure is measured using two numbers: systolic and diastolic. This table helps us categorize blood pressure 
using these two numbers.</p>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<img src={PythonHealthRiskBloodPressure} alt='Eric Pogue' width= '512'/>
</div>
<br />

<p>Body-Mass Index, which is equal to a person's weight in kg divided by the height in meters squared, is used to describe 
people as being normal weight, overweight, or obese, according to the following table.</p>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<img src={PythonHealthRiskBodyMassIndex} alt='Eric Pogue' width= '384'/>
</div>
<br />

<p>In this assignment, we will determine a person's coverage risk by assigning penalties for various conditions related to 
age, bmi, blood pressure, and family history. These penalties will be expressed in points. Here is how the point values should 
be calculated.</p>

<pre>{`
Age:
	< 30		- 0 points
	< 45		- 10 points
	< 60		- 20 points
	else		- 30 points

BMI:
	normal		- 0 points
	overweight	- 30 points
	else		- 75 points

Blood Pressure:
	normal		- 0 points
	elevated	- 15 points
	stage 1		- 30 points
	stage 2 	- 75 points
	crisis		- 100 points

Family Disease:
	diabetes	- 10 points
	cancer		- 10 points
	Alzheimer’s	- 10 points
`}</pre>
<p>We will ask the insurance agent a variety of questions about the person's health so that they can determine their 
risk category. Based on these answers, we'll calculate their risk scores associated with their age, bmi, blood pressure, 
and family history. From that, we'll know their total risk score, and we can categorize them based on that total score as 
follows:</p>
<pre>{`
Total Score and Risk Category:
	<= 20		- low risk
	<= 50		- moderate risk
	<= 75		- high risk
	else		- uninsurable
`}</pre>

We will allow the agent to evaluate people's health risk until they indicate they are done.

<p>If you are looking for some examples of what this application might look, you can see it here<NavLink to='/activity/health-risk-calculator-examples'>[link]</NavLink>. 
You will need to design your own interface and verify that it meets the specific requirements below. I’m sure you can 
improve on his design in any event. 
</p>

<em>Requirement 1</em>
<p>Either create a Terminal based command-line Python application that:</p>
<ol>
	<li>Is implemented in a single Python (.py) file named “RiskCalculator_xx.py” where “xx” are your initials in lower case</li>
	<li>Successfully executes from the command line by typing “python3 RiskCalculator_xx.py” </li>
</ol>

<p>Or create a Web application using HTML, CSS, and JavaScript that:</p>
<ol>
	<li>Is implemented in a single file name “index.html”</li>
	<li>Is hosted as a public website in Microsoft Azure</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Provides excellent end user instructions when the application starts</li>
	<li>Asks all necessary questions required to complete the above calculations</li>
	<li>Identifies the unit of each input with appropriate US/English units</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that it:</p>
<ol>
	<li>Validates user input for appropriate values, displays an meaningful error messages, and asks the question again 
		if the user enters a value that seems inappropriate (i.e. a height equal to 2 feet)</li>
	<li>Summarizes each of the values used in the final calculation including Age, BMI, Blood Pressure, and Family Disease(s)</li>
	<li>Calculates and displays the final Risk Category</li>
	<li>Continues to evaluate people’s health until the user indicates they are done</li>
</ol>

<em>Requirement 4</em>
<p>Finally test and refactor the application so that it implement all appropriate Coding Standards<NavLink to='/activity/coding-standards'>[link]</NavLink></p>

</div> )

}