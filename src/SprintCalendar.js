import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import * as SprintDates from './SprintDates'

class SprintCalendar extends Component {
	sprintCalendar() {
		// Expecting a date and duration string representation of YYYY-MM-DD-RR-LL where RR is the two digit duration 
		// in weeks (e.g. '2020-08-31-16') and LL is the sprint to highligh (e.g. '2020-08-31-16-05')

		let referenceString = this.props.match.params.reference
		
		
		// The 13 below come from the length of the calendarReference (e.g. '2020-08-31-16').
		let calendarReference = referenceString.substring(0,13)
		return SprintDates.sprintCalendar(calendarReference)
	}

	highlightRow() {
		let referenceString = this.props.match.params.reference

		// The 14 and 16 below come from the starting and ending index of the highlight (LL) value from above. 
		let highlightRowString = referenceString.substring(14,16)
		let highlightRow = parseInt(highlightRowString)
		if (isNaN(highlightRow)) {
			return -1 // Do not highlight any rows.
		}

		return highlightRow-1
	}

	renderCalendarBody() {
		let sprintCalendar = this.sprintCalendar()
		return sprintCalendar.map((row, index) => {
			const {start, end, notes} = row //destructuring
			if (index === this.highlightRow())
				return (
					<tr key={index+1}>
						<td style={{backgroundColor: '#adebdb'}}><div style={{textAlign: "center"}}>{index+1}</div></td>
						<td style={{backgroundColor: '#adebdb'}}>{SprintDates.CSTDate(end,true,true)}</td>
						<td style={{backgroundColor: '#adebdb'}}>{SprintDates.duration(start,end)} days</td>
						<td style={{backgroundColor: '#adebdb'}}>{notes}</td>
					</tr>
				)
			else 
			return (
				<tr key={index+1}>
					<td><div style={{textAlign: "center"}}>{index+1}</div></td>
					<td>{SprintDates.CSTDate(end,true,true)}</td>
					<td>{SprintDates.duration(start,end)} days</td>
					<td>{notes}</td>
				</tr>
			)
		})
	}

	render() {
		return (
			<div>
				<h4>Calendar</h4>
				<Table striped bordered hover>
					<thead><tr>
						<th style={{textAlign: "center"}}>Sprint</th>
						<th>End Date and Time</th>
						<th>Duration</th>
						<th>Notes</th>
					</tr></thead>
					<tbody>{this.renderCalendarBody()}</tbody>
				</Table>
			</div>
		)
	}
}

export { SprintCalendar }