import React, { Component } from 'react';
import WidgetText from './Widget/WidgetText.jsx'
import WidgetClock from './Widget/WidgetClock.jsx'

class WidgetContainer extends Component {
  render() {
    return (
      <div className={"WidgetContainer WidgetContainer" + this.props.placement}>
        <WidgetText />
        <WidgetClock />
      </div>
    )
  }
}

export default WidgetContainer;
