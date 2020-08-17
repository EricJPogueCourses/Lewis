import React from 'react'
import { NavLink } from 'react-router-dom';

export const al44000Sprint01 = (syllabusURL) => {
	return (

<div>
<h4>Software Engineering</h4>
<h5>Sprint 1: Getting Started, Software Engineering Life Cycles, Software as a Service, and Tools of the Trade</h5>
<p><em>Welcome to Software Engineering!</em> By this point in your software development journey I'm sure that you are 
confident in writing moderately complicated software programs. You've learned about structured programming techniques 
like sequence, selection, and repetition. You've learned how to break complicated programs down into more manageable 
pieces by using functions. You've even understand how Object-Oriented Programming can help you develope more complex
applications by utilizing encapsulation, inheritance, and polymorphism.</p>

<p>That's wonderful, however to create sophisticated modern programs we need to master some additional skills that 
allow us to effectively work in and across teams to predictably develop, enhance, and maintain complex systems that 
meet real users needs. These additional Software Engineering skills are included in what we call the Software 
Development Life Cycle and include topics like Project Management, Architecture, Requirements, Testing, Support, and 
Maintenance. These are some of the topics that we will be exploring as part of this Software Engineering course.</p>

<p>You likely noticed that I am using the term “sprint 1” to describe our first set of course activities. Sprints are 
part of the Scrum software development process. The term is used to describe a unit of work which we have committed to
delivering by a given date. We will be learning more about sprints and Scrum in the coming days. For now it is 
sufficient to know that our sprint 1 activities will take approximately 20 hours of focused effort to complete, and we 
need to complete the activities by the sprint 1 end date listed on our course calendar 
<NavLink to='/calendar/1'>[link]</NavLink>.</p>

<p>Let's start with what we hope to learn in sprint 1. You can think of these as our Learning Objectives.
By the end of sprint 1 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
	<li>Compare and contrast the steps in leading Software Development Life Cycles</li>
	<li>Explain why agile development has become the preferred software development process</li>
	<li>Describe the benefits of software as a service and cloud computing</li>
	<li>Describe client-server, three-tier and MVC design patterns</li>
	<li>Utilize leading developer tools to create and update software applications</li>
</ul>

<p>Below is our sprint 1 activities list. Although you are welcome to pursue the activities in any order, they are
listed in the order I think will be the most beneficial for you to work through the topics. Each item is expected to
take 20 to 40 minutes of focused time unless otherwise noted. Highlighted activities are <em>directly</em> related to 
graded assignments.</p>
<ol>
	<li>Review course syllabus<a href={syllabusURL}>[link]</a></li>
	<li>Maintain laser focus on due dates by reviewing our course calendar
		<NavLink to='/calendar/1'>[link]</NavLink></li>	
	<li>Understand Blended Learning by reviewing “Blended Learning & Flipped Classroom” 
		<NavLink to='/activity/blended-learning'>[video]</NavLink></li>
	<li>Be prepared to participate in a Scrum team by watching “Introduction to Scrum in 7 Minutes”
		<NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li>
	<li><em>Review sprint 1 assignments including Introduction, Lab 1, Quiz 1, Discussion 1, and Reflection 1</em></li>	
	<li>Add your photo to your Blackboard profile<NavLink to='/activity/photo-to-blackboard'>[video]</NavLink></li>
	<li>Read Chapter 1 of “Engineering Software as a Service: An Agile Approach Using Cloud Computing” by Armando Fox
		and David Patterson (Fox) and review our Chapter 1 lecture<NavLink to='/activity/fox-chapter-01'>[video]</NavLink> ~2 hours</li>
	<li>Review everything that came before Chapter 1 including Preface in our Fox textbook and review associated lecture<NavLink to='/activity/fox-chapter-00'>[video]</NavLink></li>
	<li>Start early and consistently work on Lab 1 and Quiz 1 throughout the sprint</li>
	<li>Complete “Tools of the Trade - Parts 1 and 2”<NavLink to='/activity/tools'>[link]</NavLink> ~4 hours</li>
	<li><em>Complete the Introduction assignment by making your post and responding to at least two of your classmates' posts</em></li>
	<li><em>Make your initial Discussion 1 post by the middle of the sprint</em></li>
	<li>Read Chapter 2 of Fox and review our class lecture on Chapter 2<NavLink to='/activity/fox-chapter-02'>[video]</NavLink></li>
	<li>Complete “HTML Programming - Part 1” from W3C<NavLink to='/activity/html'>[link]</NavLink> ~4 hours</li>
		{/* Todo: Consider assigning Part 2. */}
	<li>Utilize what you have learned in HTML programming to to elegantly format our course syllabus into a HTML 5 document</li>
		{/* Todo: Consider removing or replacing the above activity. */}
	<li>Briefly review the following short videos on 
		HTML <a href='https://www.youtube.com/watch?v=wy6O5hAjKAo' target='_blank' rel='noopener noreferrer'>[video]</a>,
		CSS <a href='https://www.youtube.com/watch?v=AfBK2Masemk' target='_blank' rel='noopener noreferrer'>[video]</a>,
		Cookies <a href='https://www.youtube.com/watch?v=Xlt7xeqVfO4' target='_blank' rel='noopener noreferrer'>[video]</a>,
		HTML Attributes <a href='https://www.youtube.com/watch?v=X5ArSbUea_o' target='_blank' rel='noopener noreferrer'>[video]</a>,
		Ruby MVC Create and Update <a href='https://www.youtube.com/watch?v=XXrYmVzjTKQ' target='_blank' rel='noopener noreferrer'>[video]</a>,
		and HAML <a href='https://www.youtube.com/watch?v=yX1tMdBuG3g' target='_blank' rel='noopener noreferrer'>[video]</a></li>
	{/* Todo: Review following activity. */}
	<li><em>Complete and submit all sprint 1 assignments including Lab 1, Quiz 1, final DB posts, and your Journal entry</em></li>
</ol>

</div>

	)
}