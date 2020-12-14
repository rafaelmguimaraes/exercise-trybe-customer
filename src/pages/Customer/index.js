import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Container, Header, Icon } from "semantic-ui-react";
import { CustomerForm } from "../../components";
import * as customerAction from "../../store/ducks/customer/actions";

class Customer extends Component {
  state = {
    name: "",
    age: 0,
    email: ""
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    if (id) {
      const customer = this.props.customerList.find( customer => customer.id === parseInt(id));
      this.setState({ name: customer.name, age: parseInt(customer.age), email:customer.email });
    }
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: name === 'age' ? parseInt(value === '' ? 0 : value) : value });
  };

  handleSubmit = () => {
    const { addCustomer, editCustomer, history, match: { params: { id } } } = this.props;
    if (id) {
      const customer = { id: parseInt(id), ...this.state };
      editCustomer(customer);
    } else {
      const customer = { id: uuidv4(), ...this.state };
      addCustomer(customer);
    }
    history.push("/home");
  };

  render() {
    return (
      <Container fluid textAlign="justified" style={{ width: 1000 }}>
        <Header style={{ marginTop: 40 }} textAlign="center" as="h2">
          <Icon name="user" />
          <Header.Content>Register Customer</Header.Content>
        </Header>
        <CustomerForm
          formData={this.state}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  customerList: state.customer
});

const mapDispatchToProps = {
  addCustomer: customerAction.addCustomer,
  editCustomer: customerAction.editCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
