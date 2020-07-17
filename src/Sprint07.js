
import al20000Sprint07 from './ActivityLists/AL20000Sprint07'
import al25000Sprint07 from './ActivityLists/AL25000Sprint07'
import al44000Sprint07 from './ActivityLists/AL44000Sprint07'
import * as URLParameters from './URLParameters'

const Sprint07 = () => {
	let courseNumber = URLParameters.courseNumber()
	switch(courseNumber) {
		case 20000: return (al20000Sprint07())
		case 25000: return (al25000Sprint07())
		case 44000: return (al44000Sprint07())
		default: return (al20000Sprint07())
	}
};
export { Sprint07 }