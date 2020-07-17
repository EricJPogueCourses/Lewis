
/*
	http://localhost:3000/?cpsc=44000-fall-2020-002#/welcome
*/

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

export const courseStartDateAndDuration = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	let cpsc = urlParams.get('cpsc')
	switch(cpsc) {
		case '20000-fall-2020-002': return '2020-08-31-16'
		case '20000-fall-2020-003': return '2020-08-31-16'
		case '24700-fall-2020-001': return '2020-08-31-16'
		case '44000-fall-2020-001': return '2020-08-31-16'

		default:
			console.log('Error: Course start date and duration not found (cpsc='+cpsc+')') 
			return '2020-08-31-16'
	}


}