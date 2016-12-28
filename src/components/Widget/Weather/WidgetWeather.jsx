import React, { Component } from 'react';
import Widget from '../Widget.jsx';
import './WidgetWeather.scss';

class WidgetWeather extends Component {
  render() {
    return (
      <div>
        <Widget module="Weather" parameters={this.props.parameters}>
          <p className="basic">
            <span className="temperature">
              {this.props.parameters.temperature}
              <i className={`icon icon-degrees-${this.props.parameters.temperatureUnit}`} />
            </span>
            <i className={`icon icon-${this.props.parameters.iconClass}`} />
          </p>
          <p className="forecast">
            {this.props.parameters.forecast}
          </p>
          <p className="rain-probability">
            <i className="icon icon-umbrella" />
            <span className="percentage">{this.props.parameters.percentage}</span>
          </p>
        </Widget>
      </div>
    )
  }
}

export default WidgetWeather;
