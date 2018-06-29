import React, { Component } from 'react';
import Header from './components/js/Header';
import Main from './components/js/Main';
import Footer from './components/js/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
