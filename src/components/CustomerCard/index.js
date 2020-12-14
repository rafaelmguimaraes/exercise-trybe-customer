import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { Button, Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import * as customerAction from "../../store/ducks/customer/actions";

class CustomerCard extends Component {
    render() {
      const { customer: { id, name, age, email }, del, history } = this.props;
      return (
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{`${age} years old.`}</Card.Meta>
            <Card.Description>{email}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                basic color="green"
                onClick={ () => history.push(`/customer/${id}`) }
              >
                Edit
              </Button>
              <Button 
                basic color="red"
                onClick={() => del(id)}
              >
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    }
    
};

CustomerCard.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

const mapDispatchToProps = {
  del: customerAction.deleteCustomer
};

export default withRouter(connect(null, mapDispatchToProps)(CustomerCard));
