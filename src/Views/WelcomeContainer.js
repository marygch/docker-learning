import React, { Component } from "react";
import WelcomeView from "./Welcome";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const miOwnProps = { var1: 1 };
    return <WelcomeView miOwnProps={miOwnProps} />;
  }
}

export default Welcome;
