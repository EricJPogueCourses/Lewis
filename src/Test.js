import React from 'react'

// Reference: https://www.youtube.com/watch?v=nmbX2QL7ZJc

export class Test extends React.Component {
	render() {
		return (
			<div>
			<h4>Test</h4>
				<p>{this.props.match.params.id}</p>
			</div>
		)
	}
};