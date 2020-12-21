
import { al20000Sprint04 } from './ActivityLists/AL20000Sprint04'
import { al24700Sprint04 } from './ActivityLists/AL24700Sprint04'
import { al25000Sprint04 } from './ActivityLists/AL25000Sprint04'
import { al44000Sprint04 } from './ActivityLists/AL44000Sprint04'
import * as URLParameters from './URLParameters'

export const Sprint04 = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Sprint04())
		case 24700: return (al24700Sprint04())
		case 24500: return (al25000Sprint04())
		case 44000: return (al44000Sprint04())
		default: return (al20000Sprint04())
	}
}