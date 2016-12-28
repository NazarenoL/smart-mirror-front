import React, { Component } from 'react';
import Widget from '../Widget.jsx';

class WidgetText extends Component {
  render() {
    return (
      <div>
        <Widget module="Text" parameters={this.props.parameters}>
          {this.props.parameters.text}
        </Widget>
      </div>
    )
  }
}

export default WidgetText;
