
const getExternalUrl = ( refString ) => {
	switch(refString) {
		case 'chapter-01-video': return "https://botb.blob.core.windows.net/nvm4zqwm/jlh8u41d-chapter-01-lecture.mp4"

		default: 
			console.log('Error: URL not found (refstring = ' + refString + ')')
			return ''
	}
}

export default getExternalUrl