import React,  { Component } from 'react'


function getCSTDate(dateIn, includeYear, includeTime) {
	var months = ['January','February','March','April','May','June','July',
								'August','September','October','November','December'];
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
	var date = new Date(dateIn);

	// CST is UTC -0600 so subtract 6 hours and use UTC values
	date.setUTCHours(date.getUTCHours() - 6);	

	var dateString = days[date.getUTCDay()] + ', ' +
				months[date.getUTCMonth()] + ' ' +
				date.getUTCDate();
				
	if (includeYear) {
		dateString = dateString + ', ' + date.getUTCFullYear();
	}
	 
	if (includeTime) {
		dateString = dateString + ' ' + 
				((date.getUTCHours()%12) || 12) + ':' +
				('0' + date.getUTCMinutes()).slice(-2) + ' ' +
				(date.getUTCHours() < 12? 'AM CT':'PM CT');
	}

	return dateString;
}

function createCalendar(termID, classID) {
	// Events must be listed in date order and can only have one event per sprint. Start times should all be 8:00 (8am)
	// and end times should all be 20:00 (10pm) to minimize chance of daylight savings time and timezone differences. 
	const eventsSpring2020 = [																											 
			{'description':'Martin Luther King Day', 'start':'Mon Jan 20 2020 08:00:00 GMT-0600', 'end':'Mon Jan 20 2020 20:00:00 GMT-0600', 'add':0},
			{'description':'Spring Break**',				 'start':'Mon Mar 09 2020 08:00:00 GMT-0600', 'end':'Fri Mar 13 2020 08:00:00 GMT-0600', 'add':7},
			{'description':'Easter Holiday',				 'start':'Thu Apr 09 2020 08:00:00 GMT-0600', 'end':'Mon Apr 13 2020 08:00:00 GMT-0600', 'add':0},
			{'description':'Final Exams',						'start':'Mon May 04 2020 08:00:00 GMT-0600', 'end':'Fri May 08 2020 08:00:00 GMT-0600', 'add':0}
	]; 
	let events = eventsSpring2020;
	let nextEventIndex = 0;

	const classtermSpring2020 = {
		"sprint1Start":"Mon Jan 13 2020 08:00:00 GMT-0600",
		"sprint1End":	"Sun Jan 26 2020 23:59:00 GMT-0600",
		"daysPerSprint":14
	}

	const classtermSpring2020Lt = {
		"sprint1Start":"Mon Jan 13 2020 08:00:00 GMT-0600",
		"sprint1End":	"Sun Jan 19 2020 23:59:00 GMT-0600",
		"daysPerSprint":7
	}

	let classData = classtermSpring2020;
	if (classID == "lt") {
		classData = classtermSpring2020Lt;
	}

	let sprintStartDate = new Date(classData.sprint1Start);
	//console.log("Sprint 1 Start Date (should be Monday 8:00 CT:\n"+sprintStartDate);

	let sprintEndDate = new Date(classData.sprint1End);
	//console.log("Sprint 1 End Date (should be Sunday 23:59 CT:\n"+sprintEndDate);

	let daysPerSprint = Math.round(sprintEndDate.getUTCDate() - sprintStartDate.getUTCDate());;
	//console.log("Days Per Sprint (should be 7 or 14):\n"+daysPerSprint);

	let currentDate = new Date();
	// To test future dates, uncomment following line:
	// currentDate = new Date("Mon Mar 09 2020 18:00:00 GMT-0600");
	// console.log("Current Date/Time:\n"+currentDate);	

	var table = "<table>";
	table = table +"<tr>";
	table = table +"<th></th>";
	table = table +"<th>Sprint End</th>";
	table = table +'<th style="text-align:center">Duration</th>';
	table = table +"<th>Notes</th>";
	table = table +"</tr>";
  
  var i;
	for (i=0; i<8; i++) {
		if (i!=0) {
			// BugBug
			if (i==7) daysPerSprint = daysPerSprint - 3;

			sprintStartDate.setUTCDate(sprintStartDate.getUTCDate() + daysPerSprint);
			sprintEndDate.setUTCDate(sprintEndDate.getUTCDate() + daysPerSprint);
		}

		// Debug code:
		// console.log("Start Date UTCDate():\n"+sprintStartDate);	
		// console.log("End Date UTCDate():\n"+sprintEndDate);	
		// console.log("Current Date UTCDate():\n"+currentDate); 
		var highlightRow = false;
		if ((currentDate > sprintStartDate)&&(currentDate < sprintEndDate)) {
			highlightRow = true;
		}

		// BugBug
		highlightRow = false;
		if (i==7) highlightRow = true;

		var currentNote = "";
		var nextEventDate = new Date(events[nextEventIndex].start);

		let duration = daysPerSprint;
		if (nextEventDate < sprintEndDate) {
			currentNote = events[nextEventIndex].description;

			if (events[nextEventIndex].add > 0) {
				sprintEndDate.setUTCDate(sprintEndDate.getUTCDate() + events[nextEventIndex].add);
				duration += events[nextEventIndex].add;
			}
				
			nextEventIndex++;
		}

		let endDate = getCSTDate(sprintEndDate, true, true);

		if (i!=0) {
			endDate = getCSTDate(sprintEndDate, true, true);

		}

		if (highlightRow) {
			table = table +'<tr style="background-color:#adebdb">';

			// BugBug
			if (i==7) duration = duration + 1;

			table = table + '<td><em>Sprint '+(i+1)+'</em></td><td><em>'+endDate+'</em></td><td style="text-align:center"><em>'+
				duration+' days</em></td><td><em>'+currentNote+'</em></td>';

		} else {
			table = table +"<tr>";
			table = table + '<td>Sprint '+(i+1)+'</td><td>'+endDate+'</td><td style="text-align:center">'+
				duration+' days</td><td>'+currentNote+'</td>';
		}
		table = table +"</tr>";			
	}

	return table
}

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          numOfClicks: 0
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        console.log('From handleClick()', this);
        this.setState({numOfClicks: this.state.numOfClicks + 1});
      }

      test01() {
          return (<h3>seriously</h3>)
      }

    render() {
    console.log('From render()', this);
    return (
      <div>
          {this.test01()}
        <button onClick={this.handleClick}>Click Me!</button>
        <p>Number of Times Clicked = {this.state.numOfClicks}</p>

        {createCalendar()}
      </div>
        )
    }
}

export default Calendar