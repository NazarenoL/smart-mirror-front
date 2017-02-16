import React, { Component } from 'react';
import App from './App.jsx';
import SmartMirrorApi from '../util/SmartMirrorApi.jsx';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {widgets: []}
  }

  componentDidMount() {
    SmartMirrorApi.getWidgets()
      .then((response) => {
        return response.json()
      })
      .then((widgets) => {
        console.log(widgets);
        this.setState({ widgets: widgets })
      });
  }

  render() {
    return <App widgets={this.state.widgets} />;
  }
}

export default AppContainer;
