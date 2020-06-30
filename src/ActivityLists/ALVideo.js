import React, { Component } from 'react'
import ReactPlayer from "react-player"

// Reference: https://www.youtube.com/watch?v=5pt_igBTCsI

class ALVideo extends Component {
	render() {
		return (<div>
			<ReactPlayer url="https://botb.blob.core.windows.net/nvm4zqwm/jlh8u41d-chapter-01-lecture.mp4" controls={true} width={1024} height={576} />
		</div> )
	}
}

export { ALVideo }