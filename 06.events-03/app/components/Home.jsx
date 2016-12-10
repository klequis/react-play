import React, { PropTypes, Component } from 'react';
import Level01 from "./Level01";
import OtherLevel01 from "./OtherLevel01";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "Tri-Valley Coders",
      fontColor: "color-red",
    };
    // onChange
    this.textChange = this.textChange.bind(this);
    // mouseEnter
    this.mouseOver = this.mouseOver.bind(this);
    // dblClick
    this.doubleClick = this.doubleClick.bind(this);
  }

  textChange(event) {
    this.setState({displayText: event.target.value});
  }

  mouseOver() {
    let color;
    if (this.state.fontColor === "color-red") {
      color = "color-blue";
    } else {
      color = "color-red";
    }
    console.log("color=" + color);
    this.setState({fontColor: color});
    //console.log(this.state.fontColor);
  }

  doubleClick() {
    alert("dblClick(): You double-clicked me!");
  }

  render() {

    return(
      <div>
        <h1>Home.jsx</h1>
        <h2 className={this.state.fontColor} onMouseOver={this.mouseOver}>Hover over to me to se my color change with onMouseOver()</h2>
        <Level01
          displayText={this.state.displayText}
          onChange={this.textChange}
          onDoubleClick={this.doubleClick}
        />
      <OtherLevel01 />
      </div>
    );
  }// render

} // class
