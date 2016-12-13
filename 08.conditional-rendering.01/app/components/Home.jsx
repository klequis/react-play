import React, { PropTypes, Component } from 'react';
import BlueRectangle from "./BlueRectangle";
import Message from "./Message";
import RedRectangle from "./RedRectangle";
import Warning from "./Warning";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      someNumber: 5,
    };
  }

  render() {
    let rectangle = null;
    if (this.state.flag) {
      rectangle = <BlueRectangle />;
    } else {
      rectangle = <RedRectangle />
    }

    return(
      <div>
        <Warning />
        <Message flag={this.state.flag} />
        {rectangle}

      </div>
    );
  }
}
