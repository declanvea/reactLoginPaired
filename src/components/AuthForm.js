import React from 'react';
import {Form, Input, Label} from 'reactstrap';

export default class AuthForm extends React.Component {
  render () {
    let confirm = <div><Label>Confirm Password</Label><Input name="confirm_password" /></div>;
    let n = this.props.newUser ? confirm : "";
    return (
      <Form>
        <Label>Username</Label>
        <Input name="username" />
        <Label>Password</Label>
        <Input name="password" />
        {n}
      </Form>
    )
  }
}
