import React, { Component } from 'react';



// Define the Clock class component
class Clock extends Component {
  // Constructor to initialize the state
  constructor(props) {
    super(props);

    // Initialize the state with the current time
    this.state = {
      currentTime: new Date(),
    };
  }

  // componentDidMount lifecycle method
  componentDidMount() {
    // Set up an interval to update the current time every second
    this.intervalID = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  // componentWillUnmount lifecycle method
  componentWillUnmount() {
    // Clear the interval to prevent memory leaks when the component unmounts
    clearInterval(this.intervalID);
  }

  // Render method to display the current date and time
  render() {
    // Destructure the currentTime from the state
    const { currentTime } = this.state;

    // Extract hours, minutes, and seconds from the current time
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    // Extract day, month, and year from the current time
    const day = currentTime.getDate().toString().padStart(2, '0');
    const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based
    const year = currentTime.getFullYear();

    // Render the current date and time
    return (
      <div>
        {/* Display the date */}
        <div className='Clock'>
          <div className='h5'>{day}/{month}/{year}</div>
        </div>
        {/* Display the time */}
        <div className='Clock'>
          <div className='h3'>{hours}:{minutes}:{seconds}</div>
        </div>
      </div>
    );
  }
}
export default Clock;