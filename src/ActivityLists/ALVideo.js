import React from 'react'
import { Component }  from 'react'
import { AL20000Link } from './AL20000Link'

class ALVideo extends Component {
	render() {
		return (<div><AL20000Link to={'/'+this.props.match.params.url}>[video]</AL20000Link></div> )
	}
}

export { ALVideo }