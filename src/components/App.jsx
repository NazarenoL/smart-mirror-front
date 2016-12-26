import React, { Component } from 'react';
import WidgetArea from './WidgetArea.jsx'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WidgetArea placement="top" widgets={this.props.widgets.Top} />
        <div className="container-middle">
          <div className="sidebar sidebar-left">
            <WidgetArea placement="LeftTop" widgets={this.props.widgets.LeftTop} />
            <WidgetArea placement="LeftBottom" widgets={this.props.widgets.LeftBottom} />
          </div>
          <div className="sidebar sidebar-right">
            <WidgetArea placement="RightTop" widgets={this.props.widgets.RightTop} />
            <WidgetArea placement="RightBottom" widgets={this.props.widgets.RightBottom} />
          </div>
        </div>
        <WidgetArea placement="Bottom" widgets={this.props.widgets.Bottom} />
      </div>
    );
  }
}

export default App;
