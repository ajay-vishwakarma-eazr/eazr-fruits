import React, { Component } from "react";
import moment from "moment";
class DigitalClock extends Component {
  constructor(props) {
    super(props);
    //This declared the state of time at the very beginning
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    };
  }

  //This happens when the component mount and the setInterval function get called with a call back function updateClock()
  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }

  //This section clears setInterval by calling intervalID so as to optimise memory
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  //This function set the state of the time to a new time
  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
  render() {
    return (
      <div className="Time">
        {/* <h6 className="text-white">{this.state.date}</h6> */}
        <h6 className="text-white mt-3">{this.state.time}</h6>
      </div>
    );
  }
}
export default DigitalClock;
