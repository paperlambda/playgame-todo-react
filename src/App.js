import React, { Component } from 'react';
import styled from 'styled-components';

import AddTodoForm from './components/AddTodoForm';
import TodoFilter from './components/TodoFilter';

const AppWrapper = styled.div`
  width:360px;
  margin: 0 auto;
`

const TodoList = styled.ul`
  list-style: none;
  padding-left: 0px;
`

const TodoItem = styled.li`
  display:flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius:4px;
  justify-content: space-between;
`;

const TodoItemText = styled.p`
  width: 250px;
  text-align:left;
  margin: 0;
`

const RemoveBtn = styled.button`
  display: flex;
  justify-self: flex-end;
`


class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h1>Todo App</h1>

        <AddTodoForm/>
        <TodoFilter/>

        <div>
          <TodoList>
            <TodoItem>
              <input type="checkbox"/>
              <TodoItemText>Todo Items</TodoItemText>
              <RemoveBtn>&times;</RemoveBtn>
            </TodoItem>
          </TodoList>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
