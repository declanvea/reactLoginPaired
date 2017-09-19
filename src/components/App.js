import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header';
import AuthForm from './AuthForm';
import AuthButtons from './AuthButtons';

class App extends Component {
  state = {
    newUser: false,
    username: '',
    displayName: '',
    pasword: ''
  }

  handleRegister = (e) => {
    this.setState({newUser: true})
  }

  handleCancel = (e) => {
    this.setState({newUser: false})
  }

  componentDidMount() {
    const {username} = this.state;
    const {displayName} = this.state;
    const {password} = this.state;
    // registration api
    fetch("https://obscure-api.herokuapp.com/auth/register", {
    method: "POST",
    body: JSON.stringify({
      // you'll need to define these variables ahead of time, or set them inline using key:value syntax
      username,
      displayName,
      password
    })
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      this.setState({
        // the state value you want to change should go here
        username: username,
        displayName: displayName,
        password: password
      });
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <main>
          <Header newUser={this.state.newUser} />
          <AuthForm newUser={this.state.newUser} />
          <AuthButtons handleCancel={this.handleCancel} handleRegister={this.handleRegister} newUser={this.state.newUser} />
        </main>
      </div>
    );
  }
}

export default App;
