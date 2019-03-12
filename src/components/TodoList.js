import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoListWrapper = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-top:0px;
  height: 70vh;
  overflow-x: hidden;
`

const TodoList = ({todos, toggleTodo, onRemove, selectTodo}) => {
    return (
        <TodoListWrapper>
            {
                todos.map((todo, index) => (
                    <Todo {...todo} key={index}
                        selectTodo={() => selectTodo(todo)}
                        onRemove={(e) => onRemove(todo.id, e)}
                        handleChange={(e) => toggleTodo(todo.id, e)}/>)
                )
            }
        </TodoListWrapper>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ),
    onRemove: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    selectTodo: PropTypes.func.isRequired
}

export default TodoList;