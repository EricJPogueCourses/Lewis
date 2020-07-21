
/* Below are a series of test URL that can be utilized for local and production testing:
	http://localhost:3000/?cpsc=44000-fall-2020-002#/welcome
	https://www.lewis.education/?cpsc=44000-fall-2020-002#/sprint-1
	https://www.lewis.education/?cpsc=44000-fall-2020-002&hide-nav=y#/sprint-1

	http://localhost:3000/?cpsc=24700-fall-2020-001#/sprint-1
	https://www.lewis.education/?cpsc=24700-fall-2020-001#/sprint-1

			// BugBug: Need to clean up (and move) all of the test URL examples to reflect new parameter passing. 

		// The 'course-id' URL parameter must be before any React routing parameters. 
		// Example 01: http://localhost:3000/?hide-nav=y&course=44000&#/44000-sprint03
		// Example 02: http://localhost:3000/?course=44000&calendar=2020-08-31-16#/44000-sprint05
		// Example 03: http://localhost:3000/?course=44000&calendar=2020-08-31-16
		// Example 04: http://localhost:3000/?course=25000&calendar=2020-08-31-16
		// Example 05: http://localhost:3000/
		// Example 06: http://localhost:3000/?course=20000&calendar=2020-08-31-16#/20000-sprint01
		// Example 07: http://localhost:3000/?course=20000
		// Example 08: http://localhost:3000/?hide-nav=y&course=44000&#/44000-welcome
		// Example 09: http://localhost:3000/?course=20000&#/20000-sprint01
		// Example 10: http://localhost:3000/#/test/10
		// Example 11: http://localhost:3000/?hide-nav=y#/sprint-calendar/2020-08-31-16-01
		// Example 12: http://localhost:3000/#/sprint-calendar/2020-08-31-16-01

		// Example 09: http://localhost:3000/?course=25000&calendar=2020-08-31-16#/25000-sprint01

		// Example 1b: https://www.lewis.education/?hide-nav=y&course=44000&#/44000-sprint03
		// Example 2b: https://www.lewis.education/?course=44000&#/44000-sprint05 
		// Example 3b: https://www.lewis.education/?course=44000
		// Example 4b: https://www.lewis.education/?course=25000
		// Example 5b: https://www.lewis.education/
		// Example 6b: https://www.lewis.education/ 
		// Example 7b: https://www.lewis.education/?course=25000
		// Example 8b: https://www.lewis.education/?hide-nav=y&course=44000&#/44000-welcome
		// Example 9b: https://www.lewis.education/?course=20000&#/20000-sprint01
*/

export const cpsc = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const cpscParam = urlParams.get('cpsc')
	if (cpscParam === null) {
		return ''
	}
	return cpscParam
}

export const showHeaderNavigation = () => {
		// The 'hide-nav' URL parameter must be before the React routing parameters.
		// For example: http://localhost:3000/?hide-nav=y&#/44000-sprint03
		// Example that does not work: http://localhost:3000/#/44000-sprint03&hide-nav=y

		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const hideNav = urlParams.get('hide-nav')
		if (hideNav === 'y') {
			return false; // false to show the nav bar
		}
		return true; // true to hide the nav bar
}

export const courseNumber = () => { 
	const defaultCourseNumber = 20000 // Default to cpsc-25000 which is OOP
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	let cpsc = urlParams.get('cpsc')
	if (cpsc == null) {
		return defaultCourseNumber;
	}

	// The first 5 characters of 'cpsc' are the course number (e.g. cpsc=20000-fall-2020-002)
	let course = parseInt(cpsc.substring(0, 5));

	if (isNaN(course)) {
		course = defaultCourseNumber; 
	}
	return course
}

// The following function will provide a link to a Lewis University class syllabus. A class is an instance of a 
// course (sometimes referred to as a section). For example Object-Oriented Programming (cpsc-25000) is a course 
// the Object-Oriented Programming class (cpsc-25000-001) is the section that meets MWF from 10-10:50am CT.
export const classSyllabusURL = () => { 
	let classReference = cpsc()
	switch(classReference) {
		case '20000-fall-2020-002': return "https://botb.blob.core.windows.net/nvm4zqwm/qknzei8k-syllabus.pdf"
		case '20000-fall-2020-003': return "https://botb.blob.core.windows.net/nvm4zqwm/qy0o0w0u-syllabus.pdf"
		case '24700-fall-2020-001': return "https://botb.blob.core.windows.net/nvm4zqwm/mrvgacu2-syllabus.pdf"
		case '44000-fall-2020-001': return "https://botb.blob.core.windows.net/nvm4zqwm/o1cbypjo-syllabus.pdf"

		default:
			console.log('Error: Class syllabus URL not found (class='+classReference+')') 
			return ""
	}
}

export const title = () => { 
	let classReference = cpsc()
	switch(classReference) {
		case '20000-fall-2020-002': return "Introduction to Computer Science"
		case '20000-fall-2020-003': return "Introduction to Computer Science"
		case '24700-fall-2020-001': return "Web and Distributed Programming"
		case '44000-fall-2020-001': return "Software Engineering"

		default:
			console.log('Warning: Class title not found (class='+classReference+')') 
			return "Introduction to Computer Science"
	}
}