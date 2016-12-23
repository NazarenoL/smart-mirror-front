import React, { Component } from 'react';
import Widget from './Widget.jsx'

class WidgetClock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="WidgetClock">
        <Widget>
          {this.state.date.toLocaleTimeString()}
        </Widget>
      </div>
    )
  }
}

export default WidgetClock;
