import React, { Component } from "react";
import Routes from "./routes";
import { withRouter } from 'react-router';
import { NavBar } from "./components";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar {...this.props} />
        <Routes />
      </>
    );
  }
}

export default withRouter(App);
