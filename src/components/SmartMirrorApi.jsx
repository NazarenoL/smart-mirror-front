import React from 'react'

class SmartMirrorApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      widgets: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3004/widgets')
      .then((response) => {
        return response.json()
      })
      .then((widgets) => {
        this.setState({ widgets: widgets })
      })
  }
}
