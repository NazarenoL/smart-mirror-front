import React, { Component } from 'react';
import Widget from '../Widget.jsx';

class WidgetText extends Component {
  getTextClassName() {
    let classes = [];

    if(this.props.parameters && this.props.parameters.fontSize && this.props.parameters.fontSize.length > 0) {
      classes.push(`font-size-${this.props.parameters.fontSize}`);
    }

    return classes.join(' ');
  }

  render() {
    if(this.props.parameters && this.props.parameters.text && this.props.parameters.text.length > 0) {
      var text = (
        <p className={this.getTextClassName()}>
          {this.props.parameters.text}
        </p>
      );
    }

    if(this.props.parameters && this.props.parameters.title && this.props.parameters.title.length > 0) {
      var title = (
        <h1>{this.props.parameters.title}</h1>
      );
    }

    return (
      <div>
        <Widget module="Text" parameters={this.props.parameters}>
          {title}
          {text}
        </Widget>
      </div>
    )
  }
}

export default WidgetText;
