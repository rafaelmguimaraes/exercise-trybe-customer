import React, { Component } from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const {
      auth: {
        currentUser: { name }
      }
    } = this.props;

    return (
      <Container fluid textAlign="justified" style={{ width: 1000 }}>
        <Header style={{ marginTop: 40 }} textAlign="center" as="h2">
          <Icon name="customer" />
          <Header.Content>{`Welcome ${name.toUpperCase()}! See below the registered customers:`}</Header.Content>
        </Header>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
