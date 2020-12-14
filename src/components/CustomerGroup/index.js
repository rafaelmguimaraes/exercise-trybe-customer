import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import CustomerCard from "../CustomerCard";

class CustomerGroup extends Component { 
  render() {
    const { customerList } = this.props;
    return (
      <Card.Group>
        {customerList.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </Card.Group>
    );
  }
};

CustomerGroup.propTypes = {
  customerList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CustomerGroup;
