import React, { Component } from 'react';
import Widget from './Widget.jsx'


class WidgetText extends Component {
  render() {
    return (
      <div className="Widget WidgetText">
        <Widget>
          Test
        </Widget>
      </div>
    )
  }
}

export default WidgetText;
