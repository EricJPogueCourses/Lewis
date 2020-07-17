
import al20000Sprint01 from './ActivityLists/AL20000Sprint01'
import al25000Sprint01 from './ActivityLists/AL25000Sprint01'
import al44000Sprint01 from './ActivityLists/AL44000Sprint01'
import * as URLParameters from './URLParameters'

const Sprint01 = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Sprint01())
		case 25000: return (al25000Sprint01())
		case 44000: return (al44000Sprint01())
		default: return (al20000Sprint01())
	}
};
export { Sprint01 }