"use strict";

import React, { PropTypes, Component } from 'react';
import Axios from "axios";
import Utils from "../lib/ke-utils";


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

/*
  console.log(response.data);
  this.setState({
    ipAddress: response.data.ip,
    city: response.data.city,
    region: response.data.region,
    country: response.data.country,
    loc: response.data.loc,
    postal: response.data.postal,
  });
*/

  componentDidMount() {
    Utils.logFunction("componentDidMount");
    let url = "http://ipinfo.io/json";
    this.getData(url, function(response) {
      console.log(response.data);
    });
    url = "https://api.ipify.org?format=json";
    this.getData(url, function(response) {
      console.log(response.data);
    })
  }

  getData(url, callback) {
    Utils.logFunction("getData");
    Axios.get(url)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        console.error(error);
      });
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
