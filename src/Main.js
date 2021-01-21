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
import { SprintClassActivities } from './SprintClassActivities'
import { Credits } from './Credits'
import { InfoEricPogue } from './InfoEricPogue'
import { Version } from './Version'
import { UniversityResources } from './UniversityResources'
import { StudyTable } from './Activities/StudyTable'
import { Test } from './Test'
import { Home } from './Home'

import { Activity } from './Activity'
import { ActivityConfig } from './ActivityConfig'
import { ActivityOOP } from './ActivityOOP'
import { ActivityWeb } from './ActivityWeb'
import { ActivityDale } from './ActivityDale'
import { ActivityArchitecture } from './ActivityArchitecture'

class Main extends Component {
	render() {
		return (
			<div>
				<HeaderNavigation />
				<HashRouter>
					<div className='Main'>
						<Route exact path='/' component={Home}/>
						<Route exact path='/home' component={Home}/>
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
						<Route path='/class-activities/:reference' component={SprintClassActivities}/>
						<Route path='/info' component={InfoEricPogue}/>
						<Route path='/credits' component={Credits}/>
						<Route path='/getting-help' component={UniversityResources}/>
						<Route path='/study-table' component={StudyTable}/>
						<Route path='/version' component={Version}/>

						<Route path={'/test/:id'} component={Test}/>

						<Route path={'/activity/:reference'} component={Activity}/>
						<Route path={'/activity-config/:reference'} component={ActivityConfig}/>
						<Route path={'/activity-oop/:reference'} component={ActivityOOP}/>
						<Route path={'/activity-web/:reference'} component={ActivityWeb}/>
						<Route path={'/activity-dale/:reference'} component={ActivityDale}/>
						<Route path={'/activity-architecture/:reference'} component={ActivityArchitecture}/>

					</div>
				</HashRouter>
			</div>
		);
	}
}

export default Main;