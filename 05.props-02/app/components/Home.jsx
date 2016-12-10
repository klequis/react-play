/* (A)
 * Even though PropTypes is not used in the owner component you still need
 * to specify 'PropTypes' when importing 'react'. If you don't, you will need
 * to prefix all PropTypes in the owned component with 'React.'.
*/
import React, {PropTypes, Component} from 'react';
import Welcome01 from "./Welcome01";

export default class Home extends Component {
  constructor() {
    super();
    // (B)
    // In react-play.props-01 properties were declared inside of render()
    // For this example, we have moved property declaration to 'state'.
    this.state = {
      first: "Karl",
      last: "Ecker",
      state: "California",
      age: 23,
    }
  }
  render() {
    return(
      <section>
        <h1>Sample project: react-play.props-02</h1>
        {/*
          // (C) Passing state/properties to Welcome01.jsx
        */}
        <Welcome01 first={this.state.first} last={this.state.last} state={this.state.state} age={this.state.age}/>
      </section>
    );
  }
}
