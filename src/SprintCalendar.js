import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import * as SprintDates from './SprintDates'

class SprintCalendar extends Component {
	highlightRow() {
		let highlightRow = parseInt(this.props.match.params.reference)
		if (isNaN(highlightRow)) {
			return -1 // Do not highlight any rows.
		}
		return highlightRow-1
	}

	renderCalendarBody() {
		let sprintCalendar = SprintDates.sprintCalendarFromURL()
		return sprintCalendar.map((row, index) => {
			const {start, end, notes} = row //destructuring
			if (index === this.highlightRow()) {
				return (
					<tr key={index+1}>
						<td style={{backgroundColor: '#adebdb'}}><div style={{textAlign: "center"}}>{index+1}</div></td>
						<td style={{backgroundColor: '#adebdb'}}>{SprintDates.CSTDate(end,true,true)}</td>
						<td style={{backgroundColor: '#adebdb'}}>{SprintDates.duration(start,end)} days</td>
						<td style={{backgroundColor: '#adebdb'}}>{notes}</td>
					</tr>
				)
			} else { 
				return (
					<tr key={index+1}>
						<td><div style={{textAlign: "center"}}>{index+1}</div></td>
						<td>{SprintDates.CSTDate(end,true,true)}</td>
						<td>{SprintDates.duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			}
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