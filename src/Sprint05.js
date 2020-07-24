
import { al20000Sprint05 } from './ActivityLists/AL20000Sprint05'
import { al24700Sprint05 } from './ActivityLists/AL24700Sprint05'
import { al25000Sprint05 } from './ActivityLists/AL25000Sprint05'
import { al44000Sprint05 } from './ActivityLists/AL44000Sprint05'
import * as URLParameters from './URLParameters'

const Sprint05 = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Sprint05())
		case 24700: return (al24700Sprint05())
		case 25000: return (al25000Sprint05())
		case 44000: return (al44000Sprint05())
		default: return (al20000Sprint05())
	}
};
export { Sprint05 }