import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import { courseTitle } from './URLParameters'
import { CSTDate, duration, incrementDate, isToday, pastDate, sprintCalendarFromURL, tuesdayThursdayClass, sprintStartDate, sprintEndDate } from './SprintDates'

export class SprintClassActivities extends Component {
	highlightRow() {
		let highlightRow = parseInt(this.props.match.params.reference)
		if (isNaN(highlightRow)) {
			return -1 // Do not highlight any rows.
		}
		return highlightRow-1
	}

	renderCalendarBody() {
		let sprintCalendar = sprintCalendarFromURL()
		return sprintCalendar.map((row, index) => {
			const {start, end, notes} = row //destructuring
			if (index === this.highlightRow()) {
				return (
					<tr key={index+1} style={{backgroundColor:'#adebdb'}}>
						<td><div style={{textAlign:'center'}}>{index+1}</div></td>
						<td>{CSTDate(end,true,true)}</td>
						<td>{duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			} else { 
				return (
					<tr key={index+1}>
						<td><div style={{textAlign:'center'}}>{index+1}</div></td>
						<td>{CSTDate(end,true,true)}</td>
						<td>{duration(start,end)} days</td>
						<td>{notes}</td>
					</tr>
				)
			}
		})
	}

	headerClicked = (input) => {
		let location = '#/calendar/'+input
		window.location.assign(location);	
	}
	renderSprintScheduleHeader = (sprintIn) => {
		return( 
		<div>
			<h4>{courseTitle()}</h4>
			<p>Sprint {sprintIn} starts <em>{sprintStartDate(sprintIn-1)}</em> and ends <em>{sprintEndDate(sprintIn-1)}</em>.</p><br />
			<h5 style={{color: "grey"}} onClick={() => this.headerClicked(sprintIn)}>Calendar | <span style={{color: "black"}}>Schedule</span></h5>
		</div>	
		)
	}

	renderActivityRow = (activityDate,activity) => {
		if (isToday(activityDate)) {
			return (<tr style={{backgroundColor:'#adebdb'}}><td>{CSTDate(activityDate,false,false)}</td><td>{activity}</td></tr>)
		}
		if (pastDate(activityDate)) {
			return (<tr style={{backgroundColor:'#d3d3d3'}}><td>{CSTDate(activityDate,false,false)}</td><td>{activity}</td></tr>)
		}
		return (<tr><td>{CSTDate(activityDate,false,false)}</td><td>{activity}</td></tr>)
	}

	renderScheduleTuesdayThursdayForSprint1 = (dates) => {
		return (
			<div>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
					{this.renderActivityRow(incrementDate(dates.start,1),'Introductions & Sprint Planning')}
						{this.renderActivityRow(incrementDate(dates.start,3),'Chapter Discussion, Discussion Board, and Lab')}
						{this.renderActivityRow(incrementDate(dates.start,8),'Lab & Quiz')}
						{this.renderActivityRow(incrementDate(dates.start,10),'Lab')}
					</tbody>
				</Table>
				<em>Everything is due {CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleTuesdayThursday = (dates) => {
		return (
			<div>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(incrementDate(dates.start,1),'Demos, Retrospective, and Sprint Planning')}
						{this.renderActivityRow(incrementDate(dates.start,3),'Topic Discussion, Discussion Board, and Lab')}
						{this.renderActivityRow(incrementDate(dates.start,8),'Lab & Quiz')}
						{this.renderActivityRow(incrementDate(dates.start,10),'Lab')}
					</tbody>
				</Table>
				<em>Everything is due {CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleTuesdayThursdayForSprint8 = (dates) => {
		return (
			<div>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(incrementDate(dates.start,1),'Demos, Retrospective, and Sprint Planning')}
						{this.renderActivityRow(incrementDate(dates.start,3),'Topic Discussion, Quiz, and Lab')}
						{this.renderActivityRow(incrementDate(dates.start,7),'Finals Exams Begin (no regular classes)')}
					</tbody>
				</Table>
				<em style={{color:'red'}}>Everything is due {CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleMondayWednesdayFridayForSprint1 = (dates) => {
		return (
			<div>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(incrementDate(dates.start,0),'Sprint Planning')}
						{this.renderActivityRow(incrementDate(dates.start,2),'Introductions & Team Assignments')}
						{this.renderActivityRow(incrementDate(dates.start,4),'Discussion Board & Lab')}
						{this.renderActivityRow(incrementDate(dates.start,7),'Topic Discussion')}
						{this.renderActivityRow(incrementDate(dates.start,9),'Quiz')}
						{this.renderActivityRow(incrementDate(dates.start,11),'Lab')}
					</tbody>
				</Table>
				<em>Everything is due {CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleMondayWednesdayFriday = (dates) => {
		return (
			<div>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(incrementDate(dates.start,0),'Sprint Planning')}
						{this.renderActivityRow(incrementDate(dates.start,2),'Demos & Retrospectives')}
						{this.renderActivityRow(incrementDate(dates.start,4),'Discussion Board & Lab')}
						{this.renderActivityRow(incrementDate(dates.start,7),'Topic Discussion')}
						{this.renderActivityRow(incrementDate(dates.start,9),'Quiz')}
						{this.renderActivityRow(incrementDate(dates.start,11),'Lab')}
					</tbody>
				</Table>
				<em>Everything is due {CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	renderScheduleMondayWednesdayFridayForSprint8 = (dates) => {
		return (
			<div>
				<Table striped bordered hover>
					<thead><tr><th>Day</th><th>Activity</th></tr></thead>
					<tbody>
						{this.renderActivityRow(incrementDate(dates.start,0),'Sprint Planning')}
						{this.renderActivityRow(incrementDate(dates.start,2),'Demos, Retrospective, and Chapter Discussion')}
						{this.renderActivityRow(incrementDate(dates.start,4),'Lab & Quiz')}
						{this.renderActivityRow(incrementDate(dates.start,7),'Finals Exams Begin (no regular classes)')}
					</tbody>
				</Table>
				<em style={{color:'red'}}>Everything is due {CSTDate(dates.end,true,true)}</em>
			</div>
		)
	}

	render() {
		let sprint = this.highlightRow()+1
		if (sprint === 0) {
			return (null)
		} 

		let calendar = sprintCalendarFromURL()
		let dates = calendar[sprint-1]

		if (sprint === 1) {
			if (tuesdayThursdayClass()) {
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
			if (tuesdayThursdayClass()) {
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
			if (tuesdayThursdayClass()) {
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