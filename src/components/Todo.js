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
`;

const TodoItemText = styled.p`
  width: 250px;
  text-align:left;
  margin: 0;
  text-decoration: ${props => props.completed ? 'line-through': 'none'}
`

const RemoveBtn = styled.button`
  display: flex;
  justify-self: flex-end;
`

const Todo = ({handleChange, completed, id, title, index, onRemove}) => {
    return (
        <TodoItem>
            <input type="checkbox" checked={completed} onChange={handleChange} value={index}/>
            <TodoItemText completed={completed}>{title}</TodoItemText>
            <RemoveBtn onClick={onRemove}>&times;</RemoveBtn>
        </TodoItem>
    )
}

Todo.propTypes = {
    handleChange: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    // TODO: Duplicate id on add todo (https://github.com/typicode/jsonplaceholder/issues/62)
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default Todo;