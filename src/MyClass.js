import React,  { Component } from 'react'

class MyClass extends Component {
    constructor(props) {
        super(props);this.state = {
          numOfClicks: 0
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        console.log('From handleClick()', this);
        this.setState({numOfClicks: this.state.numOfClicks + 1});
      }

      test01() {
          return 'seriously'
      }

    render() {
    console.log('From render()', this);
    return (
      <div>
          {this.test01()}
        <button onClick={this.handleClick}>Click Me!</button>
        <p>Number of Times Clicked = {this.state.numOfClicks}</p>
      </div>
        )
    }
}

export default MyClass