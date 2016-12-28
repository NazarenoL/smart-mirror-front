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
            Light rain tonight and tomorrow morning
          </p>
          <p className="rain-probability">
            <i className="icon icon-umbrella" />
            <span className="percentage">30%</span>
          </p>
        </Widget>
      </div>
    )
  }
}

export default WidgetWeather;
