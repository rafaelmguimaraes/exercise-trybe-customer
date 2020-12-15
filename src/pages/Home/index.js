import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Icon, Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import { CustomerGroup } from "../../components";

class Home extends Component {
  state = {
    isOrderByName: false,
  };

  handleInputChange = () => {
    this.setState((state) => ({ isOrderByName: !state.isOrderByName }));
  };

  sortCustomer = (a , b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  };

  render() {
    const {
      customerList,
      auth: {
        currentUser: { name }
      }
    } = this.props;
    const { isOrderByName } = this.state;
    return (
      <Container fluid textAlign="justified" style={{ width: 1000 }}>
        <Header style={{ marginTop: 40 }} textAlign="center" as="h2">
          <Icon name="database" />
          <Header.Content>{`Welcome ${name.toUpperCase()}! See below the registered customers:`}</Header.Content>
          <Header.Content>
            <Checkbox 
              toggle 
              onChange={() => this.handleInputChange()}
            /> Order by Name
          </Header.Content>
        </Header>
        { (customerList.length === 0) ? (
          <>
            No customers registered in our database. Please register the first <Link to="/customer">here</Link>.
          </>
        ) : (
          <CustomerGroup customerList={isOrderByName ? [...customerList].sort(this.sortCustomer) : customerList } />
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
