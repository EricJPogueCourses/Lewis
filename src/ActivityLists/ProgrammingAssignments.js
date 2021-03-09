import React from 'react'
import { NavLink } from 'react-router-dom'

export const HelloWorldWithPython = {
	'name':'“Hello World with Python”',
	'link':'/activity/hello-world-python',
	'estimate':'~4 hours'
}

export const GettingToKnowEachOther = {
	'name':'“Getting to Know Each Other”',
	'link':'/activity/getting-to-know-each-other',
	'estimate':'~6 hours'
}

export const AssignmentPortfolioWebsite = {
	'name':'“Assignment Portfolio Website”',
	'link':'/activity/assignment-portfolio',
	'estimate':'~3 hours'	
}

export const MatchmakerWithPython = {
	'name':'“Matchmaker with Python”',
	'link':'/activity/matchmaker-python',
	'estimate':'~6 hours'
}

export const MatchmakerWithJava = {
	'name':'“Matchmaker with Java”',
	'link':'/activity/matchmaker-java',
	'estimate':'~6 hours'
}

export const MatchmakerWithGo = {
	'name':'“Matchmaker with Go”',
	'link':'/activity/matchmaker-go',
	'estimate':'~6 hours'
}

export const HealthRiskCalculator = {
	'name':'“Health Insurance Risk Calculator for the Web”',
	'link':'/activity/health-risk-calculator-web',
	'estimate':'~6 hours'
}

export const OvalDrawPlusWithJava = {
	'name':'“OvalDraw Plus”',
	'link':'/activity/ovaldraw-plus-java',
	'estimate':'~4 hours'
}

export const CodingStandardsValidatorPart1 = {
	'name':'“Coding Standards Validator - Part 1”',
	'link':'/activity/coding-standards-validator',
	'estimate':'~8 hours'
}

export const CodingStandardsValidatorPart2 = {
	'name':'“Coding Standards Validator - Part 2”',
	'link':'/activity/coding-standards-validator',
	'estimate':'~8 hours'
}

export const QuizMaster = {
	'name':'“QuizMaster Server”',
	'link':'/activity/quiz-master',
	'estimate':'~8 hours'
}

export const FaceDrawWithJava = {
	'name':'“FaceDraw”',
	'link':'/activity/facedraw-java',
	'estimate':'~8 hours'
}

export const MosaicWithJava = {
	'name':'“Mosaic”',
	'link':'/activity/mosaic-java',
	'estimate':'~8 hours'
}

export const TurtleDraw = {
	'name':'“TurtleDraw”',
	'link':'/activity/turtle-draw',
	'estimate':'~8 hours'
}

export const FinalProjectProposal = {
	'name':'“Final Project Proposal”',
	'link':'/activity/final-project-proposal',
	'estimate':'~2 hours'
}

export const FinalProjectSprint0 = {
	'name':'“Final Project Sprint 0”',
	'link':'/activity/final-project-sprint-0',
	'estimate':'~4 hours'
}

export const AzureWebsite = {
	'name':'“Azure Website”',
	'link':'/activity/azure-website',
	'estimate':'~6 hours'
}

export const start = (assignment) => { return ( <div>Start working on {assignment.name}<NavLink to={assignment.link}>[link]</NavLink></div>) }
export const complete = (assignment) => { return ( <div>Complete {assignment.name}<NavLink to={assignment.link}>[link]</NavLink>{sup(assignment.estimate)}</div>)}

const sup = (text) => { return (<sup> {text} </sup>)}