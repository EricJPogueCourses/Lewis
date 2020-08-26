import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import * as SprintDates from './SprintDates'
import * as URLParameters from './URLParameters'

export class SprintClassActivities extends Component {
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
					<tr key={index+1} style={{backgroundColor:'#adebdb'}}>
						<td><div style={{textAlign:'center'}}>{index+1}</div></td>
						<td>{SprintDates.CSTDate(end,true,true)}</td>
						<td>{SprintDates.duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			} else { 
				return (
					<tr key={index+1}>
						<td><div style={{textAlign:'center'}}>{index+1}</div></td>
						<td>{SprintDates.CSTDate(end,true,true)}</td>
						<td>{SprintDates.duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			}
		})
	}

	renderActivityRow = (activityDate,activity) => {
		if (SprintDates.isToday(activityDate)) {
			return (<tr style={{backgroundColor:'#adebdb'}}><td>{SprintDates.CSTDate(activityDate,false,false)}</td><td>{activity}</td></tr>)
		}
		if (SprintDates.pastDate(activityDate)) {
			return (<tr style={{backgroundColor:'#d3d3d3'}}><td>{SprintDates.CSTDate(activityDate,false,false)}</td><td>{activity}</td></tr>)
		}
		return (<tr><td>{SprintDates.CSTDate(activityDate,false,false)}</td><td>{activity}</td></tr>)
	}

	render() {

		let sprint = this.highlightRow()+1
		if (sprint === 0) {
			return (null)
		} 

		let calendar = SprintDates.sprintCalendarFromURL()
		let dates = calendar[sprint-1]
		return (
			<div>
			<h4>{URLParameters.title()}</h4>
			<h5>Sprint {sprint}</h5>
			<h6>Starts: {SprintDates.CSTDate(dates.start,false,true)}</h6>
			<h6>Ends: {SprintDates.CSTDate(dates.end,false,true)}</h6>
			<br />
			<h5>Class Activity Schedule</h5>
			<Table striped bordered hover>
				<thead><tr><th>Day</th><th>Activity</th></tr></thead>
				<tbody>
					{this.renderActivityRow(SprintDates.incrementDate(dates.start,0),'Sprint Planning')}
					{this.renderActivityRow(SprintDates.incrementDate(dates.start,2),'Demos plus Assignments')}
					{this.renderActivityRow(SprintDates.incrementDate(dates.start,4),'Lab')}
					{this.renderActivityRow(SprintDates.incrementDate(dates.start,7),'Assignments')}
					{this.renderActivityRow(SprintDates.incrementDate(dates.start,9),'Quiz')}
					{this.renderActivityRow(SprintDates.incrementDate(dates.start,11),'Lab')}
				</tbody>
			</Table>
			</div>
		)
	}
}