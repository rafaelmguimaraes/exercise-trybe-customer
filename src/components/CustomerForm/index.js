import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

const CustomerForm = ({
  formData: { name, age, email },
  onInputChange,
  onSubmit
}) => (
  <Form size="large">
    <Segment stacked>
      <Form.Input
        value={name}
        name="name"
        fluid
        placeholder="Name"
        onChange={(event) => onInputChange(event)}
      />
      <Form.Input
        value={age}
        name="age"
        type="number"
        fluid
        placeholder="Age"
        onChange={(event) => onInputChange(event)}
      />
      <Form.Input
        value={email}
        name="email"
        placeholder="email"
        onChange={(event) => onInputChange(event)}
      />
      <Button onClick={onSubmit} color="blue" fluid size="large">
        Save Customer
      </Button>
    </Segment>
  </Form>
);

CustomerForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CustomerForm;
