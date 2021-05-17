import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import { CSTDate, duration, sprintCalendarFromURL, sprintStartDate, sprintEndDate } from './SprintDates'
import { courseTitle } from './URLParameters'

export class SprintCalendar extends Component {
	headerClicked = (input) => {
		window.location.assign('#/class-activities/'+input);	
	}

	rowClicked = (input) => {
		window.location.assign('#/calendar/'+input);	
	}

	highlightRow = () => {
		let highlightRow = parseInt(this.props.match.params.reference)
		if (isNaN(highlightRow)) {
			return -1 // Do not highlight any rows.
		}
		return highlightRow-1
	}

	renderCalendarBody = () => {
		let sprintCalendar = sprintCalendarFromURL()

		return sprintCalendar.map((row, index) => {
			const {start, end, notes} = row 
			if (index === this.highlightRow()) {
				return (
					<tr onClick={() => this.rowClicked(index+1)} key={index+1} style={{backgroundColor:'#adebdb'}}>
						<td style={{textAlign:'center'}}>{index+1}</td>
						<td>{CSTDate(end,true,true)}</td>
						<td>{duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			} else { 
				return (
					<tr onClick={() => this.rowClicked(index+1)} key={index+1}>
						<td style={{textAlign:'center'}}>{index+1}</td>
						<td>{CSTDate(end,true,true)}</td>
						<td>{duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			}
		})
	}

	render = () => {
		return (
			<div>
			<h4>{courseTitle()}</h4>
			<p>Sprint {this.highlightRow()+1} starts <em>{sprintStartDate(this.highlightRow())}</em> and ends <em>{sprintEndDate(this.highlightRow())}</em>.</p><br />

			<h5 onClick={() => this.headerClicked(this.highlightRow()+1)}>Calendar | <span style={{color: "grey"}}>Schedule</span></h5>
			<Table striped bordered hover>
				<thead><tr>
					<th style={{textAlign:'center'}}>Sprint</th>
					<th>End Date and Time</th>
					<th>Duration</th>
					<th>Notes</th>
				</tr></thead>
				<tbody>{this.renderCalendarBody()}</tbody>
			</Table>
			<p>View daily schedule by clicking on “Schedule” in the table header.</p>
			</div>
		)
	}
}