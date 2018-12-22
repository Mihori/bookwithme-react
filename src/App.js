import React, { Component } from 'react';
import { Header } from './shared/Header';
import './App.css';
import { RentalCard } from './components/rental/RentalCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RentalCard />
      </div>
    );
  }
}

export default App;
