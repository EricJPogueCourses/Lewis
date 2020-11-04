
import React from 'react';
export const PythonHealthRiskCalculatorExamples = () => {
	return (
	
<div>

<br />
<h4>Health Insurance Risk Calculator</h4>
<h5>Summary: Below are some examples of how the Health Insurance Risk Calculator user interface might look.</h5>
<br />	
<h5>Below is an example of what an implementation of the Health Insurance Risk Calculator might look like.</h5>
<pre>{`
**************************************************
HEALTH RISK CALCULATOR              
**************************************************

This program helps you classify health insurance
based on their risk level. That is determined
by their health. Their health is judged in terms
of their body-mass index, blood pressure, age,
and family history of disease.

Enter the person's age in years: 21
Enter the person's height in inches: 72
Enter the person's weight in pounds: 160
Enter the person's systolic blood pressure: 120
Enter the person's diastolic blood pressure: 70
Does the person have a family history of ...
Diabetes? n
Cancer? n
Alzheimers? n
Risk scores
Age:              0
Body-Mass:        0 (index = 21.70)
Blood Pressure:  15 (elevated)
Family History:   0

Based on these scores, the person is low-risk.

Do you have another patient? y

--------------------------------------------------

Enter the person's age in years: 31
Enter the person's height in inches: 72
Enter the person's weight in pounds: 205
Enter the person's systolic blood pressure: 115
Enter the person's diastolic blood pressure: 70
Does the person have a family history of ...
Diabetes? y
Cancer? n
Alzheimers? n
Risk scores
Age:             10
Body-Mass:       30 (index = 27.80)
Blood Pressure:   0 (normal)
Family History:  10

Based on these scores, the person is moderate-risk.

Do you have another patient? y

--------------------------------------------------

Enter the person's age in years: 47
Enter the person's height in inches: 65
Enter the person's weight in pounds: 140
Enter the person's systolic blood pressure: 125
Enter the person's diastolic blood pressure: 75
Does the person have a family history of ...
Diabetes? y
Cancer? y
Alzheimers? n
Risk scores
Age:             20
Body-Mass:        0 (index = 23.29)
Blood Pressure:  15 (elevated)

`}</pre>

</div> )

}