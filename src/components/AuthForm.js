import React from 'react';
import {Form, Input, Label} from 'reactstrap';

export default class AuthForm extends React.Component {
  render () {
    return (
      <Form>
        <Label>Username</Label>
        <Input name="username" />
        <Label>Password</Label>
        <Input name="password" />
      </Form>
    )
  }
}
