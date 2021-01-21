// Dale chapter lecture sessions with embedded video and links to slides provided below.
import React, { Component } from 'react'

import { courseTitle } from './URLParameters'
import { baseLink } from './Activity'
import { daleChapterLectureVideo } from './Panopto'

export class ActivityDale extends Component {
	daleSlidesURL = (fileName) => {
		return baseLink()+'dale/'+fileName	
	}

	render() {
		const chapter = this.props.match.params.reference
		const slidesURL = this.daleSlidesURL('chapter-01-lecture.pptx')
		return (
			<div>
				<h4>{courseTitle()}</h4>
				<h5>“Computer Science Illuminated” by Nell Dale and John Lewis (Dale) Chapter {chapter} Lecture</h5>
				{daleChapterLectureVideo(chapter)}<br />
				If you are looking for the associated slides, you can find them here <a href={slidesURL}>[link]</a>.
			</div>
		)
	}
}
