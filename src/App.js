import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AddTodoForm from './containers/AddTodoForm';
import VisibleTodoList from './containers/VisibleTodoList';
import { fetchTodo } from './actions';
import TodoFilter from './components/TodoFilter';
import TodoDetail from './containers/TodoDetail';

const AppWrapper = styled.div`
  width:360px;
  margin: 0 auto;
`
const Flexed = styled.div`
  display:flex;
`

let App = () => {
  return (
    <AppWrapper>
      <h1>Todo App</h1>
      <Flexed>
        <div>
          <AddTodoForm/>
          <TodoFilter/>
          <VisibleTodoList/>
        </div>
        <div>
          <TodoDetail/>
        </div>
      </Flexed>
    </AppWrapper>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: dispatch(fetchTodo())
})

App = connect(null, mapDispatchToProps)(App)

export default App;
