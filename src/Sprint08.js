
import { al20000Sprint08 } from './ActivityLists/AL20000Sprint08'
import { al24700Sprint08 } from './ActivityLists/AL24700Sprint08'
import { al25000Sprint08 } from './ActivityLists/AL25000Sprint08'
import { al44000Sprint08 } from './ActivityLists/AL44000Sprint08'
import * as URLParameters from './URLParameters'

export const Sprint08 = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Sprint08())
		case 24700: return (al24700Sprint08())
		case 25000: return (al25000Sprint08())
		case 44000: return (al44000Sprint08())
		default: return (al20000Sprint08())
	}
}