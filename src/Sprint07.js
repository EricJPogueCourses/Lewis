
import { courseNumber } from './URLParameters'
import { al20000Sprint07 } from './ActivityLists/AL20000Sprint07'
import { al24700Sprint07 } from './ActivityLists/AL24700Sprint07'
import { al24500Sprint07 } from './ActivityLists/AL24500Sprint07'
import { al36000Sprint07 } from './ActivityLists/AL36000Sprint07'
import { al44000Sprint07 } from './ActivityLists/AL44000Sprint07'

export const Sprint07 = () => {
	switch(courseNumber()) {
		case 20000: return (al20000Sprint07())
		case 24700: return (al24700Sprint07())
		case 24500: return (al24500Sprint07())
		case 36000: return (al36000Sprint07())
		case 44000: return (al44000Sprint07())
		default: return (null)
	}
}