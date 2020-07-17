
import al20000Sprint02 from './ActivityLists/AL20000Sprint02'
import al25000Sprint02 from './ActivityLists/AL25000Sprint02'
import al44000Sprint02 from './ActivityLists/AL44000Sprint02'
import * as URLParameters from './URLParameters'

const Sprint02 = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Sprint02())
		case 25000: return (al25000Sprint02())
		case 44000: return (al44000Sprint02())
		default: return (al20000Sprint02())
	}
};
export { Sprint02 }