
import { courseNumber, classSyllabusURL } from './URLParameters'
import { al20000Sprint01 } from './ActivityLists/AL20000Sprint01'
import { al24700Sprint01 } from './ActivityLists/AL24700Sprint01'
import { al24500Sprint01 } from './ActivityLists/AL24500Sprint01'
import { al36000Sprint01 } from './ActivityLists/AL36000Sprint01'
import { al44000Sprint01 } from './ActivityLists/AL44000Sprint01'

export const Sprint01 = () => {
	switch(courseNumber()) {
		case 20000: return (al20000Sprint01(classSyllabusURL()))
		case 24700: return (al24700Sprint01(classSyllabusURL()))
		case 24500: return (al24500Sprint01(classSyllabusURL()))
		case 36000: return (al36000Sprint01(classSyllabusURL()))
		case 44000: return (al44000Sprint01(classSyllabusURL()))
		default: return (null)
	}
};

