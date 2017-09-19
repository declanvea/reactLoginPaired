import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <h2>{this.props.newUser ? 'Sign Up' : 'Login'}</h2>
    )
  }
}
