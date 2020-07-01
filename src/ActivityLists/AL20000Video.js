import React from 'react'
import { Component }  from 'react'
import { AL20000Link } from './AL20000Link'

class AL20000Video extends Component {
	render() {
		return (<div><AL20000Link to={'/'+this.props.match.params.ref}>[video]</AL20000Link></div> )
	}
}

export { AL20000Video }