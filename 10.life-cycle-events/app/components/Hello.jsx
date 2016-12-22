import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bcity: "",
    };
  }

  componentDidMount() {
    console.log("> componentDidMount()");
  }

  componentWillReceiveProps(nextProps) {
    console.log("> componentWillReceiveProps()");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("> componentWillUpdate()");
  }

  render() {
    return(
      <h1>HELLO</h1>
    )
  }


} // class
