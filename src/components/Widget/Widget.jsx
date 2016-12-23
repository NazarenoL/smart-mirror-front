import React, { Component } from 'react';
import './Widget.scss';

class Widget extends Component {
  render() {
    return (
      <div className="Widget">
        {this.props.children}
      </div>
    );
  }
}

export default Widget;
