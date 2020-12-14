import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { CustomerGroup } from "../../components";

class Home extends Component {
  render() {
    const {
      customerList,
      auth: {
        currentUser: { name }
      }
    } = this.props;
    return (
      <Container fluid textAlign="justified" style={{ width: 1000 }}>
        <Header style={{ marginTop: 40 }} textAlign="center" as="h2">
          <Icon name="database" />
          <Header.Content>{`Welcome ${name.toUpperCase()}! See below the registered customers:`}</Header.Content>
        </Header>
        { (customerList.length === 0) ? (
          <>
            No customers registered in our database. Please register the first <Link to="/customer">here</Link>.
          </>
        ) : (
          <CustomerGroup customerList={customerList} />
        ) }
        
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  customerList: state.customer,
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
