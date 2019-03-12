import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TodoItem = styled.li`
  display:flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius:4px;
  justify-content: space-between;
  margin-bottom: 3px;
`;

const TodoItemText = styled.p`
  width: 240px;
  text-align:left;
  margin: 0;
  text-decoration: ${props => props.completed ? 'line-through': 'none'}
  cursor: pointer;
`

const RemoveBtn = styled.button`
  display: flex;
  justify-self: flex-end;
`

const Todo = ({handleChange, completed, title, onRemove, selectTodo}) => {
    return (
        <TodoItem onClick={selectTodo}>
            <input type="checkbox" checked={completed} onChange={handleChange}/>
            <TodoItemText completed={completed}>{title}</TodoItemText>
            <RemoveBtn onClick={onRemove}>&times;</RemoveBtn>
        </TodoItem>
    )
}

Todo.propTypes = {
    handleChange: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    selectTodo: PropTypes.func.isRequired
}

export default Todo;