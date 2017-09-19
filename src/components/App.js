import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header';
import AuthForm from './AuthForm';
import AuthButtons from './AuthButtons';

class App extends Component {
  state = {
    newUser: false
  }

  handleRegister = (e) => {
    this.setState({newUser: true})
    console.log(this.state.newUser);
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
          <AuthForm />
          <AuthButtons handleRegister={this.handleRegister} />
        </main>
      </div>
    );
  }
}

export default App;
