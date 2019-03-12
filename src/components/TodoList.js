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
                    <Todo {...todo} key={index} index={index} 
                        onRemove={() => onRemove(index)}
                        handleChange={(e) => toggleTodo(e)}/>)
                )
            }
        </TodoListWrapper>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            // TODO: Duplicate id on add todo (https://github.com/typicode/jsonplaceholder/issues/62)
            id: PropTypes.number,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ),
    onRemove: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList;