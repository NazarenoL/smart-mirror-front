import React, { Component } from 'react';
import WidgetContainer from './WidgetContainer.jsx'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        Tests
        <WidgetContainer placement="top" />
        <div className="container-middle">
          <div className="sidebar sidebar-left">
            <WidgetContainer placement="LeftTop" />
            <WidgetContainer placement="LeftBottom" />
          </div>
          <div className="sidebar sidebar-right">
            <WidgetContainer placement="RightTop" />
            <WidgetContainer placement="RightBottom" />
          </div>
        </div>
        <WidgetContainer placement="Bottom" />
      </div>
    );
  }
}

export default App;
