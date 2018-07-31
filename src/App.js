import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { data } from './data.js';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
class App extends Component {
  render() {
    console.log(data);
    // where our routes lives
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
