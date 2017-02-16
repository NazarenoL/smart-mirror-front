import React from 'react'

class SmartMirrorApi {
  static getWidgets() {
    return fetch('http://localhost:3001/widgets');
  }

}

export default SmartMirrorApi;


