"use strict";

import React, { PropTypes, Component } from 'react';
import Axios from "axios";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAddress: "",
      city: "",
      region: "",
      country: "",
      loc: "",
      postal: "",
    }
  }


  componentDidMount() {
    console.log("getIPInfo");
    var url = "http://ipinfo.io/json";
    console.log("ipInfo-URL: " + url);
    Axios.get(url)
      .then((response) => {

        console.log(response.data);
        this.setState({
          ipAddress: response.data.ip,
          city: response.data.city,
          region: response.data.region,
          country: response.data.country,
          loc: response.data.loc,
          postal: response.data.postal,
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  getData(url, response) {
    console.log("getData()");
    
  }



  render() {
    console.log("render");
    return(
      <div>
        <h1>ipInfo</h1>
        <p>ipAddress: {this.state.ipAddress}</p>
        <p>City: {this.state.city}</p>
        <p>Region: {this.state.region}</p>
        <p>Country: {this.state.country}</p>
        <p>Loc: {this.state.loc}</p>
        <p>Postal: {this.state.postal}</p>
      </div>
    );
  }
}
