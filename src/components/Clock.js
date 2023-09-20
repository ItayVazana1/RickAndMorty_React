import React, { Component } from 'react';



class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { currentTime } = this.state;

    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    const day = currentTime.getDate().toString().padStart(2, '0');
    const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); 
    const year = currentTime.getFullYear();

    return (
      <div>
        <div className='Clock'>{hours}:{minutes}:{seconds}</div>
        <div className='Clock'>{day}/{month}/{year}</div>
      </div>
    );
  }
}

export default Clock;