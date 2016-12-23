import React, { Component } from 'react';
import WidgetContainer from './WidgetContainer.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Tests
        <WidgetContainer placement="top" />
        <div className="leftSidebar">
          <WidgetContainer placement="LeftTop" />
          <WidgetContainer placement="LeftBottom" />
        </div>
        <WidgetContainer placement="Bottom" />
      </div>
    );
  }
}

export default App;
