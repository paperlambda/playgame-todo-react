import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import TodoFilter from './containers/TodoFilter';
import AddTodoForm from './containers/AddTodoForm';
import VisibleTodoList from './containers/VisibleTodoList';
import { fetchTodo } from './actions';

const AppWrapper = styled.div`
  width:360px;
  margin: 0 auto;
`

let App = () => {
  return (
    <AppWrapper>
      <h1>Todo App</h1>

      <AddTodoForm/>
      <TodoFilter/>
      <VisibleTodoList/>
    </AppWrapper>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: dispatch(fetchTodo())
})

App = connect(null, mapDispatchToProps)(App)

export default App;
