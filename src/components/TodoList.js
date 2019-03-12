import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoListWrapper = styled.ul`
  list-style: none;
  padding-left: 0px;
`

const TodoList = ({todos, toggleTodo, onRemove}) => {
    return (
        <TodoListWrapper>
            {
                todos.map((todo, index) => (
                    <Todo {...todo} key={index}
                        onRemove={() => onRemove(todo.id)}
                        handleChange={() => toggleTodo(todo.id)}/>)
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
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList;