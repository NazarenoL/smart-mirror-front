import React, { Component } from 'react';
import WidgetText from './Widget/Text/WidgetText.jsx'
import WidgetClock from './Widget/Clock/WidgetClock.jsx'
import WidgetWeather from './Widget/Weather/WidgetWeather.jsx'
import './WidgetArea.scss'

class WidgetArea extends Component {
  createReactElementsFromWidgets() {
    let widgets = [];

    if (this.props.widgets && this.props.widgets.length > 0) {
      widgets = this.props.widgets.map((oneWidget) => {
        let WidgetModule = this.getWidgetFromModuleString(oneWidget.module);

        return <WidgetModule key={oneWidget.id} title={oneWidget.title} parameters={oneWidget.parameters} />
      });
    }

    return widgets;
  }

  getWidgetFromModuleString(moduleString) {
    switch (moduleString) {
      case 'Clock':
        return WidgetClock;
      case 'Text':
        return WidgetText;
      case 'Weather':
        return WidgetWeather;
      default:
        console.error(`Module of type ${moduleString} does not exist.`);
        break;
    }
  }

  render() {
    let widgets = this.createReactElementsFromWidgets();

    return (
      <div className={"WidgetArea WidgetArea" + this.props.placement}>
        { widgets }
      </div>
    )
  }

}

export default WidgetArea;
