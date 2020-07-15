import React, { Component } from 'react';

class Contador extends React.Component {

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
        <h3>Tiempo de preparación <br></br>
          {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

// ReactDOM.render(
// <Clock />,
// document.getElementById('root')
// );

export default Contador;
