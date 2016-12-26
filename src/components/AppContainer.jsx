import React, { Component } from 'react';
import App from './App.jsx';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {widgets: []}
  }

  componentDidMount() {
    fetch('http://localhost:3003/widgets')
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
