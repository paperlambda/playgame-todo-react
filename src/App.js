import React, { Component } from 'react';
import styled from 'styled-components';

import AddTodoForm from './containers/AddTodoForm';
import TodoFilter from './containers/TodoFilter';
import TodoList from './containers/TodoList';

const AppWrapper = styled.div`
  width:360px;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
      <h1>Todo App</h1>

      <AddTodoForm/>
      <TodoFilter/>
      <TodoList/>
    </AppWrapper>
    );
  }
}

export default App;
