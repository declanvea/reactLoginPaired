import React from 'react';
import {Button} from 'reactstrap';

export default class AuthButtons extends React.Component {
  render() {
    let loginButton = <Button color="primary">Login</Button>;
    let registerButton = <Button onClick={this.props.handleCancel} color="primary">Cancel</Button>;
    return (
      <div className="buttons">
        {this.props.newUser ? registerButton : loginButton}
        <Button color="btn" onClick={this.props.handleRegister}>Register</Button>
      </div>
    )
  }
}
