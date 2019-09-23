import React, { Component } from 'react';
import './App.css';
import JokeList from './JokeList';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Rate Dem Jokes</h1>
            <JokeList />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
