import React from 'react'
import { NavLink } from 'react-router-dom'

export const GettingToKnowEachOther = {
	'name':'“Getting to Know Each Other”',
	'link':'/activity/getting-to-know-each-other',
	'estimate':'~6 hours'
}

export const MatchmakerWithGo = {
	'name':'“Matchmaker with Go”',
	'link':'/activity/matchmaker-go',
	'estimate':'~6 hours'
}

export const start = (assignment) => { return ( <div>Start working on {assignment.name}<NavLink to={assignment.link}>[link]</NavLink></div>) }
export const complete = (assignment) => { return ( <div>Complete {assignment.name}<NavLink to={assignment.link}>[link]</NavLink>{sup(assignment.estimate)}</div>)}

const sup = (text) => { return (<sup> {text} </sup>)}