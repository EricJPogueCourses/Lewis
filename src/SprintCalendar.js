import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

import * as SprintDates from './SprintDates'
import * as URLParameters from './URLParameters'

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
			let classActivitiesLink = '/class-activities/' + (index+1)
			if (index === this.highlightRow()) {
				return (
					<tr key={index+1} style={{backgroundColor:'#adebdb'}}>
						<td><div style={{textAlign:'center'}}><NavLink style={{color:'black'}} to={classActivitiesLink}>{index+1}</NavLink></div></td>
						<td>{SprintDates.CSTDate(end,true,true)}</td>
						<td>{SprintDates.duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			} else { 
				return (
					<tr key={index+1}>
						<td><div style={{textAlign:'center'}}><NavLink style={{color:'black'}} to={classActivitiesLink}>{index+1}</NavLink></div></td>
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
			<h4>{URLParameters.title()}</h4>
			<h5>Calendar</h5>
			
			<Table striped bordered hover>
				<thead><tr>
					<th style={{textAlign:'center'}}>Sprint</th>
					<th>End Date and Time</th>
					<th>Duration</th>
					<th>Notes</th>
				</tr></thead>
				<tbody>{this.renderCalendarBody()}</tbody>
			</Table>
			<p>Be sure to check our schedule of class activities by clicking on the sprint number.</p>
			</div>
		)
	}
}



export { SprintCalendar }