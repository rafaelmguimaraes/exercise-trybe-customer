import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Menu, Container } from "semantic-ui-react";
import * as authAction from "../../store/ducks/auth/actions";

class NavBar extends Component {
  handleItemClick = (e, { name }) => {
    const { history } = this.props;
    history.push(`/${name}`);
  };

  render() {
    const { auth, logOut } = this.props;
    return (
      <Menu color="blue" size="massive">
        <Container text>
          <Menu.Item name="home" onClick={this.handleItemClick}></Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              {auth.isLogged ? (
                <Button onClick={logOut} primary>
                  LogOut
                </Button>
              ) : (
                <span>Login to Access</span>
              ) }
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  logOut: authAction.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);