// Test links are available at:
//     http://localhost:3000/#/test/me
//     http://www.lewis.education/#/test/me

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
	const defaultCourseNumber = 20000 // Default to cpsc-24500 which is OOP
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
// course (sometimes referred to as a section). For example Object-Oriented Programming (cpsc-24500) is a course 
// the Object-Oriented Programming class (cpsc-24500-001) is the section that meets MWF from 10-10:50am CT.
export const classSyllabusURL = () => { 
	let classReference = cpsc()
	switch(classReference) {
		case '20000-spring-2021-002': return 'https://botb.blob.core.windows.net/nvm4zqwm/v1qshz2j-syllabus-cpsc-20000-002.pdf'
		case '24500-spring-2021-001': return 'https://botb.blob.core.windows.net/nvm4zqwm/o2sla524-syllabus-cpsc-24500-001.pdf'
		case '36000-spring-2021-001': return 'https://botb.blob.core.windows.net/nvm4zqwm/se3c5q62-syllabus-cpsc-36000-001.pdf'
		case '44000-spring-2021-001': return 'https://botb.blob.core.windows.net/nvm4zqwm/ps6xfphd-syllabus-cpsc-44000-001.pdf'

		case '20000-fall-2020-002': return 'https://botb.blob.core.windows.net/nvm4zqwm/qknzei8k-syllabus.pdf'
		case '20000-fall-2020-003': return 'https://botb.blob.core.windows.net/nvm4zqwm/qy0o0w0u-syllabus.pdf'
		case '24700-fall-2020-001': return 'https://botb.blob.core.windows.net/nvm4zqwm/mrvgacu2-syllabus.pdf'
		case '44000-fall-2020-001': return 'https://botb.blob.core.windows.net/nvm4zqwm/o1cbypjo-syllabus.pdf'

		default:
			console.log('Error: Class syllabus URL not found (class='+classReference+')') 
			return 'https://botb.blob.core.windows.net/nvm4zqwm/qknzei8k-syllabus.pdf'
	}
}

export const courseTitle = () => { 
	let classReference = cpsc()
	switch(classReference) {
		case '20000-spring-2021-002': return 'Introduction to Computer Science'
		case '24500-spring-2021-001': return 'Object-Oriented Programming'
		case '36000-spring-2021-001': return 'Applied Programming Languages'
		case '44000-spring-2021-001': return 'Software Engineering'

		// Depreciated classes.
		case '20000-fall-2020-002': return 'Introduction to Computer Science'
		case '20000-fall-2020-003': return 'Introduction to Computer Science'
		case '24700-fall-2020-001': return 'Web and Distributed Programming'
		case '44000-fall-2020-001': return 'Software Engineering'

		default:
			console.log('Warning: Class title not found (class='+classReference+')') 
			return 'Introduction to Computer Science'
	}
}