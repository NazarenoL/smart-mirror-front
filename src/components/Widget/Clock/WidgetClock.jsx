import React, { Component } from 'react';
import Widget from '../Widget.jsx';
import './WidgetClock.scss';

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
        <Widget module="Clock" parameters={this.props.parameters}>
          {this.state.date.toLocaleTimeString()}
        </Widget>
      </div>
    )
  }
}

export default WidgetClock;
