
import { courseNumber } from './URLParameters'
import { al20000Sprint03 } from './ActivityLists/AL20000Sprint03'
import { al24700Sprint03 } from './ActivityLists/AL24700Sprint03'
import { al24500Sprint03 } from './ActivityLists/AL24500Sprint03'
import { al36000Sprint03 } from './ActivityLists/AL36000Sprint03'
import { al44000Sprint03 } from './ActivityLists/AL44000Sprint03'

export const Sprint03 = () => {
	switch(courseNumber()) {
		case 20000: return (al20000Sprint03())
		case 24700: return (al24700Sprint03())
		case 24500: return (al24500Sprint03())
		case 36000: return (al36000Sprint03())
		case 44000: return (al44000Sprint03())
		default: return (null)
	}
}