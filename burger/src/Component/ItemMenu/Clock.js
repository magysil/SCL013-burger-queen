import React, { Component } from 'react';

class clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.time(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  time() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h3>Hora: {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default clock;
