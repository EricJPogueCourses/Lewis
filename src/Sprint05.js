
// Final project proposals.
// Todo: Consider moving Networks to sprint 5. 

import { al20000Sprint05 } from './ActivityLists/AL20000Sprint05'
import { al24700Sprint05 } from './ActivityLists/AL24700Sprint05'
import { al24500Sprint05 } from './ActivityLists/AL24500Sprint05'
import { al36000Sprint05 } from './ActivityLists/AL36000Sprint05'
import { al44000Sprint05 } from './ActivityLists/AL44000Sprint05'
import * as URLParameters from './URLParameters'

export const Sprint05 = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Sprint05())
		case 24700: return (al24700Sprint05())
		case 24500: return (al24500Sprint05())
		case 36000: return (al36000Sprint05())
		case 44000: return (al44000Sprint05())
		default: return (null)
	}
}