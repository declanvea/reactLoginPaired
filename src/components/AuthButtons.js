import React from 'react';
import {Button} from 'reactstrap';

export default class AuthButtons extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary">Login</Button>
        <Button color="secondary" onClick={this.props.handleRegister}>Register</Button>
      </div>
    )
  }
}
