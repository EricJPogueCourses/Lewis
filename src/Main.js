import './Main.css';

import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { HeaderNavigation } from './HeaderNavigation'

import { Welcome } from './Welcome'

import { Sprint01 } from './Sprint01'
import { Sprint02 } from './Sprint02'
import { Sprint03 } from './Sprint03'
import { Sprint04 } from './Sprint04'
import { Sprint05 } from './Sprint05'
import { Sprint06 } from './Sprint06'
import { Sprint07 } from './Sprint07'
import { Sprint08 } from './Sprint08'
import { SprintCalendar } from './SprintCalendar'
import { Credits } from './Credits'
import { InfoEricPogue } from './InfoEricPogue'
import { Version } from './Version'
import { UniversityResources } from './UniversityResources'
import { Test } from './Test'

import { Activity } from './Activity'

class Main extends Component {
	render() {
		return (
			<div>
				<HeaderNavigation />
				<HashRouter>
					<div className='Main'>
						<Route exact path='/' component={Welcome}/>
						<Route exact path='/home' component={Welcome}/>
						<Route path='/welcome' component={Welcome}/>
						<Route path='/sprint-1' component={Sprint01}/>
						<Route path='/sprint-2' component={Sprint02}/>
						<Route path='/sprint-3' component={Sprint03}/>
						<Route path='/sprint-4' component={Sprint04}/>
						<Route path='/sprint-5' component={Sprint05}/>
						<Route path='/sprint-6' component={Sprint06}/>
						<Route path='/sprint-7' component={Sprint07}/>
						<Route path='/sprint-8' component={Sprint08}/>
						<Route path='/calendar/:reference' component={SprintCalendar}/>
						<Route path='/info' component={InfoEricPogue}/>
						<Route path='/credits' component={Credits}/>
						<Route path='/getting-help' component={UniversityResources}/>
						<Route path='/version' component={Version}/>

						<Route path={'/test/:id'} component={Test}/>

						<Route path={'/activity/:reference'} component={Activity}/>

					</div>
				</HashRouter>
			</div>
		);
	}
}

export default Main;