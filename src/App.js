import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        
        <div>
          <form>
            <div>
              <input type="text"/>
              <button>Submit</button>
            </div>
          </form>
        </div>

        <div>
          <label>Shows :</label>
          <select>
            <option value="">---------------</option>
            <option value="">COMPLETED TASK</option>
            <option value="">UNCOMPLETED TASK</option>
          </select>
        </div>

        <div>
          <ul>
            <li>
              <input type="checkbox"/>
              <a>Todo Items</a>
              <a>&times;</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
