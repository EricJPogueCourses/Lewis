
import { al20000Sprint02 } from './ActivityLists/AL20000Sprint02'
import { al24700Sprint02 } from './ActivityLists/AL24700Sprint02'
import { al24500Sprint02 } from './ActivityLists/AL24500Sprint02'
import { al36000Sprint02 } from './ActivityLists/AL36000Sprint02'
import { al44000Sprint02 } from './ActivityLists/AL44000Sprint02'

import * as URLParameters from './URLParameters'

export const Sprint02 = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Sprint02())
		case 24700: return (al24700Sprint02())
		case 24500: return (al24500Sprint02())
		case 36000: return (al36000Sprint02())
		case 44000: return (al44000Sprint02())
		default: return (null)
	}
}