import './Main.css';

import React, { Component } from "react";
import {
	Route,
	HashRouter
} from "react-router-dom";

import OOPSprint01 from './OOPSprint01'
import OOPSprint02 from './OOPSprint02'
import OOPSprint03 from './OOPSprint03'
import OOPSprint04 from './OOPSprint04'
import OOPSprint05 from './OOPSprint05'
import OOPSprint06 from './OOPSprint06'
import OOPSprint07 from './OOPSprint07'
import OOPSprint08 from './OOPSprint08'
import Credits from './Credits'
import Tools from './Tools'

import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

class Main extends Component {
	render() {
		return (

<HashRouter>
<div>
	<div className="Header">
		
	<Navbar bg="light" expand="lg">
		<Navbar.Brand href="#home"><h5>Object-Oriented Programming</h5></Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
					<NavDropdown title="Activity Lists" id="basic-nav-dropdown">
						<NavDropdown.Item href="#sprint01">Sprint 1</NavDropdown.Item>
						<NavDropdown.Item href="#sprint02">Sprint 2</NavDropdown.Item>
						<NavDropdown.Item href="#sprint03">Sprint 3</NavDropdown.Item>
						<NavDropdown.Item href="#sprint04">Sprint 4</NavDropdown.Item>
						<NavDropdown.Item href="#sprint05">Sprint 5</NavDropdown.Item>
						<NavDropdown.Item href="#sprint06">Sprint 6</NavDropdown.Item>
						<NavDropdown.Item href="#sprint07">Sprint 7</NavDropdown.Item>
						<NavDropdown.Item href="#sprint08">Sprint 8</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#tools">Tools</NavDropdown.Item>
					</NavDropdown>
				<Nav.Link href="#credits">Credits</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>

	</div>
	<div className="Main">
		<Route path="/sprint01" component={OOPSprint01}/>
		<Route path="/sprint02" component={OOPSprint02}/>
		<Route path="/sprint03" component={OOPSprint03}/>
		<Route path="/sprint04" component={OOPSprint04}/>
		<Route path="/sprint05" component={OOPSprint05}/>
		<Route path="/sprint06" component={OOPSprint06}/>
		<Route path="/sprint07" component={OOPSprint07}/>
		<Route path="/sprint08" component={OOPSprint08}/>
		<Route path="/tools" component={Tools}/>
		<Route path="/credits" component={Credits}/>
	</div>
	
</div>
</HashRouter>

		);
	}
}

export default Main;