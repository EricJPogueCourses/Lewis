import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import * as URLParameters from './URLParameters'

import { Tools } from './Activities/ToolsOfTheTrade'
import { CodingStandards } from './Activities/CodingStandards'
import { GitCommands } from './Activities/GitCommands'
import { PythonHelloWorld } from './Activities/PythonHelloWorld'
import { PythonNumberingSystems } from './Activities/PythonNumberingSystems'
import { HTML } from './Activities/HTML'
import { SuccessfulDeveloper } from './Activities/SuccessfulDeveloper'
import { AzureWebsite } from './Activities/AzureWebsite'
import { WebAssignmentPortfolio } from './Activities/WebAssignmentPortfolio'
import { WebGettingToKnowEachOther } from './Activities/WebGettingToKnowEachOther'
import { WebMyFavoriteHobby } from './Activities/WebMyFavoriteHobby'
import { WebCourseSchedule } from './Activities/WebCourseSchedule'
import { WebMapManiaVersion1 } from './Activities/WebMapManiaVersion1'
import { WebMapManiaVersion2 } from './Activities/WebMapManiaVersion2'

export const videoLink = (header, url) => {
	return ( <div><h5>{header}</h5><ReactPlayer url={url} controls={true} width={1024} height={576} /></div> )
}

const videoLinkWithSlides = (header, url, urlSlides) => {
	return ( 
		<div>
			<h5>{header}</h5><ReactPlayer url={url} controls={true} width={1024} height={576} />
			<br />
			If you are looking for the associated slides, you can find them here<a href={urlSlides}>[link]</a>.
		</div>
	)
}

export const baseLink = () => {
	return 'https://lewiseducation.blob.core.windows.net/'
}

const webProgrammingLink = (fileName) => {
	return baseLink()+'web-and-distributed-programming/'+fileName
}

const daleLink = (fileName) => {
	return baseLink()+'dale/'+fileName	
}

const foxLink = (fileName) => {
	return baseLink()+'fox/'+fileName	
}

// ** Knowmia functions **
// Knowmia Todo: Report "Uncaught Error: Highcharts error #16" to TechSmith as it occurs even when the TechSmith copied link (below) is inserted into a Hello World style html file.
// const iFrameForChapter5 = "<iframe scrolling='no' frameborder='0' style='width: 1024px; height: 576px; border:0;' src='https://app.knowmia.com/connector/embed/index/5nwa' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
const knowmiaVideoLink = (videoFileReference) => {
	return 'https://app.knowmia.com/connector/embed/index/'+videoFileReference
}

const knowmiaIFrameTag = (videoFileReference) => {
	return "<iframe scrolling='no' frameborder='0' style='width: 1024px; height: 576px; border:0;' src='"+knowmiaVideoLink(videoFileReference)+"' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
}

const IFrameComponent = (props) =>{
	return (<div dangerouslySetInnerHTML={{__html:  props.iframe?props.iframe:""}} />);
}

const knowmiaVideoPage = (header, videoFileReference) => {
	return ( <div><h5>{header}</h5><IFrameComponent iframe={knowmiaIFrameTag(videoFileReference)} /></div> )
}
// ** End -- Knowmia functions **

class Activity extends Component {
	activity() {
		let activityReference = this.props.match.params.reference
		switch(activityReference) {
			// Each of the case statements below represent a link to an activity. Activities are referenced via the
			// application URL. For example, the following two links would take us to the test and production Blended 
			// Learning activities:
			//     http://localhost:3000/#/activity/blended-learning  
			//     http://www.lewis.education/#/activity/blended-learning
			case 'blended-learning': return videoLink(
				'Blended Learning', 
				'https://www.youtube.com/watch?v=paQCE58334M&vl')
			case 'scrum-in-7-minutes': return videoLink(
				'Introduction to Scrum', 
				'https://www.youtube.com/watch?v=9TycLR0TqFA')
			case 'photo-to-blackboard': return videoLink(
				'Add Your Photo to Blackboard', 
				'https://www.youtube.com/watch?v=PTmK3QdwZro&feature=youtu.be')
			case 'blackboard-ultra': return videoLink(
				'Introduction to Blackboard Ultra', 
				'https://www.youtube.com/watch?v=IKjBxIe_138&feature=youtu.be')
			case 'tools': return Tools()
			case 'coding-standards': return CodingStandards()
			case 'git-commands': return GitCommands()
			case 'successful-programmer': return SuccessfulDeveloper()
			case 'hello-world-python': return PythonHelloWorld()
			case 'numbering-systems-python': return PythonNumberingSystems()
			case 'html': return HTML()
			case 'azure-website': return AzureWebsite()
			case 'azure-website-supplemental-2020': return knowmiaVideoPage(
				'Website Creation with GitHub and Microsoft Azure - 2020 Supplemental Edition', '6Jkv')
			case 'assignment-portfolio': return WebAssignmentPortfolio()
			case 'getting-to-know-each-other': return WebGettingToKnowEachOther()
			case 'favorite-hobby': return WebMyFavoriteHobby()
			case 'course-schedule': return WebCourseSchedule()
			case 'map-mania-v1': return WebMapManiaVersion1()
			case 'map-mania-v2': return WebMapManiaVersion2()

			// Start Computer Science Illuminated” by Nell Dale and John Lewis (Dale).
			case 'dale-chapter-01': return videoLinkWithSlides(
				'“Computer Science Illuminated” by Nell Dale and John Lewis (Dale) Chapter 1 Lecture', 
				daleLink('chapter-01-lecture.mp4'), daleLink('chapter-01-lecture.pptx'))
			case 'dale-chapter-02': return videoLinkWithSlides(
				'“Computer Science Illuminated” by Nell Dale and John Lewis (Dale) Chapter 2 Lecture', 
				daleLink('chapter-02-lecture.mp4'), daleLink('chapter-02-lecture.pptx'))
			case 'dale-chapter-03': return videoLinkWithSlides(
				'“Computer Science Illuminated” by Nell Dale and John Lewis (Dale) Chapter 3 Lecture',
				daleLink('chapter-03-lecture.mp4'), daleLink('chapter-03-lecture.pptx')) 
			case 'dale-chapter-04': return videoLink(
				'“Computer Science Illuminated” by Nell Dale and John Lewis (Dale) Chapter 4 Lecture', 
				daleLink('chapter-04-lecture.mp4'), daleLink('chapter-04-lecture.pptx'))
			case 'dale-chapter-05': return knowmiaVideoPage(
				'“Computer Science Illuminated” by Nell Dale and John Lewis (Dale) Chapter 5 Lecture', '5nwa')
			case 'dale-chapter-06': return knowmiaVideoPage(
				'“Computer Science Illuminated” by Nell Dale and John Lewis (Dale) Chapter 6 Lecture', 'ehQJ')
			// End Dale.

			// Start Programming The World Wide Web” by Robert W. Sebesta (Sebesta)
			case 'sebesta-chapter-01': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 1 Lecture', 
				webProgrammingLink('intro-to-web-and-distributed-programming.mp4'), 
				webProgrammingLink('intro-to-web-and-distributed-programming-slides-only.pptx'))
			case 'sebesta-chapter-02': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 2 Lecture', 
				webProgrammingLink('html5.mp4'), webProgrammingLink('html5-slides-only.pptx'))
			case 'sebesta-chapter-03': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 3 Lecture', 
				webProgrammingLink('css.mp4'), webProgrammingLink('css-slides-only.pptx'))
			case 'sebesta-chapter-04': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 4 Lecture', 
				webProgrammingLink('javascript-basics.mp4'), webProgrammingLink('javascript-basics-slides-only.pptx'))
			case 'sebesta-chapter-05': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 5 Lecture', 
				webProgrammingLink('javascript-and-html.mp4'), webProgrammingLink('javascript-and-html-slides-only.pptx'))
			case 'sebesta-chapter-06': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 6 Lecture', 
				webProgrammingLink('dynamic-documents-with-javascript.mp4'), 
				webProgrammingLink('dynamic-documents-with-javascript-slides-only.pptx'))
			case 'sebesta-chapter-07': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 7 Lecture', 
				webProgrammingLink('xml-and-webservices.mp4'), webProgrammingLink('xml-and-webservices-slides-only.pptx'))
			case 'sebesta-chapter-09': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 9 Lecture', 
				webProgrammingLink('intro-to-php.mp4'), webProgrammingLink('intro-to-php-slides-only.pptx'))
			case 'sebesta-chapter-10': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 10 Lecture', 
				webProgrammingLink('intro-to-ajax.mp4'), webProgrammingLink('intro-to-ajax-slides-only.pptx'))
			// Todo: Create and link a 'slides-only' version of database-access-through-the-web.mp4.
			case 'sebesta-chapter-13': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 13 Lecture', 
				webProgrammingLink('database-access-through-the-web.mp4'), 
				webProgrammingLink('database-access-through-the-web.pptx'))
			// End Sebesta.

			// Start Engineering Software as a Service: An Agile Approach Using Cloud Computing” by Armando Fox and 
			//     David Patterson (Fox).
			// Todo: Create and link 'slides-only' versions of Fox lectures.
			case 'fox-chapter-00': return videoLinkWithSlides(
				'“Engineering Software as a Service: An Agile Approach Using Cloud Computing” by Armando Fox and David Patterson (Fox) Preface Lecture', 
				foxLink('chapter-00-lecture.mp4'), foxLink('chapter-00-lecture.pptx'))
			case 'fox-chapter-01': return videoLinkWithSlides(
				'“Engineering Software as a Service: An Agile Approach Using Cloud Computing” by Armando Fox and David Patterson (Fox) Chapter 1 Lecture', 
				foxLink('chapter-01-lecture.mp4'), foxLink('chapter-01-lecture.pptx'))
			case 'fox-chapter-02': return videoLinkWithSlides(
				'“Engineering Software as a Service” by Armando Fox and David Patterson (Fox) Chapter 2 Lecture', 
				foxLink('chapter-02-lecture.mp4'), foxLink('chapter-02-lecture.pptx'))
			case 'fox-chapter-03': return videoLinkWithSlides(
				'“Engineering Software as a Service” by Armando Fox and David Patterson (Fox) Chapters 3-6 Lecture', 
				foxLink('chapter-03-lecture.mp4'), foxLink('chapter-03-lecture.pptx'))
			case 'fox-chapter-06': return videoLinkWithSlides(
				'“Engineering Software as a Service” by Armando Fox and David Patterson (Fox) Chapter 6 Lecture', 
				foxLink('chapter-06-lecture.mp4'), foxLink('chapter-06-lecture.pptx'))
			case 'fox-chapter-07': return videoLinkWithSlides(
				'“Engineering Software as a Service” by Armando Fox and David Patterson (Fox) Chapter 7 Lecture', 
				foxLink('chapter-07-lecture.mp4'), foxLink('chapter-07-lecture.pptx'))
			// End Fox.

			default: return 'Activity not found!'
		}
	}

	render() {
		return (
			<div>
				<h4>{URLParameters.title()}</h4>
				{this.activity()}
			</div>
		)
	}
}

export { Activity }