import React, { Component } from 'react';
import './Widget.scss';

class Widget extends Component {
  getClassName() {
    //Determine base classes
    let classes = ['Widget', `Widget${this.props.module}`];

    //Add extra classes if present in parameters
    if (this.props.extraClasses && this.props.extraClasses.length > 0) {
      classes.push(...this.props.extraClasses);
    }

    return classes.join(' ');
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {this.props.children}
      </div>
    );
  }
}

export default Widget;
