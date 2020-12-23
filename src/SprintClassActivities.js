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

	renderSprintScheduleHeader = (sprintIn,calendarIn) => {
		//let dates = calendarIn[sprintIn-1]
		return( 
		<div>
			<h4>{URLParameters.title()}</h4>
			<h5>Sprint {sprintIn}</h5>
			<br />
		</div>	
		)
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

	renderScheduleTuesdayThursdayForSprint1 = (dates) => {
		return (
			<div>
				<h5>Class Activity Schedule</h5>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
					{this.renderActivityRow(SprintDates.incrementDate(dates.start,1),'Introductions & Sprint Planning')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,3),'Chapter Discussion, Discussion Board, and Lab')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,8),'Lab & Quiz')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,10),'Lab')}
					</tbody>
				</Table>
				<em>Everything is due {SprintDates.CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleTuesdayThursday = (dates) => {
		return (
			<div>
				<h5>Class Schedule</h5>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,1),'Demos, Retrospective, and Sprint Planning')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,3),'Chapter Discussion, Discussion Board, and Lab')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,8),'Lab & Quiz')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,10),'Lab')}
					</tbody>
				</Table>
				<em>Everything is due {SprintDates.CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleTuesdayThursdayForSprint8 = (dates) => {
		return (
			<div>
				<h5>Class Activity Schedule</h5>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,1),'Demos, Retrospective, and Sprint Planning')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,3),'Chapter Discussion, Quiz, and Lab')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,7),'Finals Exams Begin (no regular classes)')}
					</tbody>
				</Table>
				<em style={{color:'red'}}>Everything is due {SprintDates.CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleMondayWednesdayFridayForSprint1 = (dates) => {
		return (
			<div>
				<h5>Class Schedule</h5>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,0),'No class')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,2),'Introductions & Sprint Planning')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,4),'Discussion Board & Lab')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,7),'Chapter Discussion')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,9),'Quiz')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,11),'Lab')}
					</tbody>
				</Table>
				<em>Everything is due {SprintDates.CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleMondayWednesdayFriday = (dates) => {
		return (
			<div>
				<h5>Class Schedule</h5>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,0),'Sprint Planning')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,2),'Demos & Retrospective')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,4),'Discussion Board & Lab')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,7),'Chapter Discussion')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,9),'Quiz')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,11),'Lab')}
					</tbody>
				</Table>
				<em>Everything is due {SprintDates.CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleMondayWednesdayFridayForSprint8 = (dates) => {
		return (
			<div>
				<h5>Class Activity Schedule</h5>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,0),'Sprint Planning')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,2),'Demos, Retrospective, and Chapter Discussion')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,4),'Lab & Quiz')}
						{this.renderActivityRow(SprintDates.incrementDate(dates.start,7),'Finals Exams Begin (no regular classes)')}
					</tbody>
				</Table>
				<em style={{color:'red'}}>Everything is due {SprintDates.CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	render() {
		let sprint = this.highlightRow()+1
		if (sprint === 0) {
			return (null)
		} 

		let calendar = SprintDates.sprintCalendarFromURL()
		let dates = calendar[sprint-1]

		if (sprint === 1) {
			if (SprintDates.tuesdayThursdayClass()) {
				return (
					<div>
						{this.renderSprintScheduleHeader(sprint,calendar)}
						{this.renderScheduleTuesdayThursdayForSprint1(dates)}
					</div>
				)
			} else {
				return (
					<div>
						{this.renderSprintScheduleHeader(sprint,calendar)}
						{this.renderScheduleMondayWednesdayFridayForSprint1(dates)}
					</div>
				)
			}
		} else if (sprint < 8) {
			if (SprintDates.tuesdayThursdayClass()) {
				return (
					<div>
						{this.renderSprintScheduleHeader(sprint,calendar)}
						{this.renderScheduleTuesdayThursday(dates)}
					</div>
				)
			} else {
				return (
					<div>
						{this.renderSprintScheduleHeader(sprint,calendar)}
						{this.renderScheduleMondayWednesdayFriday(dates)}
					</div>
				)
			}
		} else {
			if (SprintDates.tuesdayThursdayClass()) {
				return (
					<div>
						{this.renderSprintScheduleHeader(sprint,calendar)}
						{this.renderScheduleTuesdayThursdayForSprint8(dates)}
					</div>
				)
			} else {
				return (
					<div>
						{this.renderSprintScheduleHeader(sprint,calendar)}
						{this.renderScheduleMondayWednesdayFridayForSprint8(dates)}
					</div>
				)
			}
		} 


	}
}