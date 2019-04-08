import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { myAction } from './actions';
import { Todo } from './components/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>  
    );
  }
}

export default App;