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

const Todo = ({handleChange, completed, id, title}) => {
    return (
        <TodoItem>
            <input type="checkbox" checked={completed} onChange={handleChange} value={id}/>
            <TodoItemText completed={completed}>{title}</TodoItemText>
            <RemoveBtn>&times;</RemoveBtn>
        </TodoItem>
    )
}

Todo.propTypes = {
    handleChange: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Todo;