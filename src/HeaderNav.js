import React,  { Component } from 'react'

import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

class HeaderNav extends Component {
	hideNavBar() {
		const hideNavID = 'hide-nav';

		// Parse URL for input parameters
		var vars = {};
		window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});

		if (typeof vars[hideNavID] !== 'undefined') {
			// return true to hide navigation bar if 'hide-nav' exists in url params.
			return true; 
		}

		return false;
	}

	render() {
		if (this.hideNavBar()) {
			return (null)
		}
		else
			return (

<div className="Header">
	<Navbar bg="light" expand="lg">
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link href="#home">Lewis.education</Nav.Link>
					<NavDropdown title="Activity Lists" id="basic-nav-dropdown">
						<NavDropdown.Item href="#25000-sprint01">Sprint 1</NavDropdown.Item>
						<NavDropdown.Item href="#25000-sprint02">Sprint 2</NavDropdown.Item>
						<NavDropdown.Item href="#25000-sprint03">Sprint 3</NavDropdown.Item>
						<NavDropdown.Item href="#25000-sprint04">Sprint 4</NavDropdown.Item>
						<NavDropdown.Item href="#25000-sprint05">Sprint 5</NavDropdown.Item>
						<NavDropdown.Item href="#25000-sprint06">Sprint 6</NavDropdown.Item>
						<NavDropdown.Item href="#25000-sprint07">Sprint 7</NavDropdown.Item>
						<NavDropdown.Item href="#25000-sprint08">Sprint 8</NavDropdown.Item>
						
						<NavDropdown.Divider />
						<NavDropdown.Item href="#44000-sprint01">Sprint 1 - SE</NavDropdown.Item>
						<NavDropdown.Item href="#44000-sprint02">Sprint 2 - SE</NavDropdown.Item>
						<NavDropdown.Item href="#44000-sprint03">Sprint 3 - SE</NavDropdown.Item>
						<NavDropdown.Item href="#44000-sprint04">Sprint 4 - SE</NavDropdown.Item>
						<NavDropdown.Item href="#44000-sprint05">Sprint 5 - SE</NavDropdown.Item>
						<NavDropdown.Item href="#44000-sprint06">Sprint 6 - SE</NavDropdown.Item>
						<NavDropdown.Item href="#44000-sprint07">Sprint 7 - SE</NavDropdown.Item>
						<NavDropdown.Item href="#44000-sprint08">Sprint 8 - SE</NavDropdown.Item>

						<NavDropdown.Divider />
						<NavDropdown.Item href="#calendar">Calendar</NavDropdown.Item>
						<NavDropdown.Item href="#successful-programmer">Successful Programmer</NavDropdown.Item>
						<NavDropdown.Item href="#tools">Tools</NavDropdown.Item>
					</NavDropdown>
				<Nav.Link href="#credits">Credits</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
</div>

		)
	}
}

export default HeaderNav