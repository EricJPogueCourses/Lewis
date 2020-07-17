
import al20000Sprint06 from './ActivityLists/AL20000Sprint06'
import al25000Sprint06 from './ActivityLists/AL25000Sprint06'
import al44000Sprint06 from './ActivityLists/AL44000Sprint06'
import * as URLParameters from './URLParameters'

const Sprint06 = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Sprint06())
		case 25000: return (al25000Sprint06())
		case 44000: return (al44000Sprint06())
		default: return (al20000Sprint06())
	}
};
export { Sprint06 }