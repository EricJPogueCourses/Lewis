
import al20000Welcome from './ActivityLists/AL20000Welcome'
import al25000Welcome from './ActivityLists/AL25000Welcome'
import al44000Welcome from './ActivityLists/AL44000Welcome'

import * as URLParameters from './URLParameters'

const Welcome = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Welcome())
		case 25000: return (al25000Welcome())
		case 44000: return (al44000Welcome())

		default: return (al20000Welcome())
	}
};

export { Welcome }