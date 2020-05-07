import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

class Calendar extends Component {
	getCSTDate(dateIn, includeYear, includeTime) {
		var months = ['January','February','March','April','May','June','July',
									'August','September','October','November','December'];
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
		var date = new Date(dateIn);

		// CST is UTC -0600 so subtract 6 hours and use UTC values
		date.setUTCHours(date.getUTCHours() - 6);	

		var dateString = days[date.getUTCDay()] + ', ' +
					months[date.getUTCMonth()] + ' ' +
					date.getUTCDate();
					
		if (includeYear) {
			dateString = dateString + ', ' + date.getUTCFullYear();
		}
		
		if (includeTime) {
			dateString = dateString + ' at ' + 
					((date.getUTCHours()%12) || 12) + ':' +
					('0' + date.getUTCMinutes()).slice(-2) + ' ' +
					(date.getUTCHours() < 12? 'AM CT':'PM CT');
		}

		return dateString;
	}

	calculateDuration(start, end) {
		let startDate = new Date(start);
		let endDate = new Date(end);
		let durationTime = endDate.getTime() - startDate.getTime();
		let durationDays = Math.round(durationTime / (1000 * 3600 * 24));
		return durationDays;
	}

	renderCalendarHeader(headers) {
		return headers.map((header, index) => {
			return <td key={index}>{header}</td>
		})
	}

	renderCalendarBody(calendar) {
		return calendar.map((row, index) => {
			const {start, end, notes} = row //destructuring
			return (
				<tr key={index+1}>
					<td>Sprint {index+1}</td>
					<td>{this.getCSTDate(end,true,true)}</td>
					<td>{this.calculateDuration(start,end)} days</td>
					<td>{notes}</td>
				</tr>
			)
		})
	}

	createCalendarXL = () => {
		const headings = [ '', 'End Date', 'Duration', 'Notes' ];

		const sprintCalendarSpring2020 = [																											 
			{ 'start':'Mon Jan 13 2020 08:00:00 GMT-0600', 'end':'Sun Jan 26 2020 23:59:00 GMT-0600', 'notes':'Martin Luther King Day' },
			{ 'start':'Mon Jan 27 2020 08:00:00 GMT-0600', 'end':'Sun Feb 09 2020 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Feb 10 2020 08:00:00 GMT-0600', 'end':'Sun Feb 23 2020 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Feb 24 2020 08:00:00 GMT-0600', 'end':'Sun Mar 08 2020 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Mar 09 2020 08:00:00 GMT-0600', 'end':'Sun Mar 29 2020 23:59:00 GMT-0600', 'notes':'Spring Break**' },
			{ 'start':'Mon Mar 30 2020 08:00:00 GMT-0600', 'end':'Sun Apr 12 2020 23:59:00 GMT-0600', 'notes':'Easter Holiday' },
			{ 'start':'Mon Apr 13 2020 08:00:00 GMT-0600', 'end':'Sun Apr 26 2020 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Apr 27 2020 08:00:00 GMT-0600', 'end':'Thu May 07 2020 23:59:00 GMT-0600', 'notes':'Final Exams' }
		]; 

		return (
			<Table striped bordered hover>
				<thead><tr>{this.renderCalendarHeader(headings)}</tr></thead>
				<tbody>{this.renderCalendarBody(sprintCalendarSpring2020)}</tbody>
			</Table>
		)
	}

	render() {
		return (
			<div>
				<h4>Course Schedule</h4>
				{this.createCalendarXL()}
			</div>
		)
	}
}

export { Calendar }