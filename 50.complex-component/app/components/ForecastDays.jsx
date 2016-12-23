import React, {Component} from 'react';
import ForecastDay from "./ForecastDay";

export default class ForecastDays extends Component {
  constructor(props) {
    super(props);

  }
  render () {
    const renderDays = this.props.forecastDays.map((arr, i) => {
      return (
        <ForecastDay first={arr.first} last={arr.last} />
      );
    });

    return (
      <div>
        {renderDays}
      </div>
    )
  }
}
