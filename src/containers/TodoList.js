import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchTodo, toggleTodo } from '../actions';

const TodoListWrapper = styled.ul`
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
  text-decoration: ${props => props.completed ? 'line-through': 'none'}
`

const RemoveBtn = styled.button`
  display: flex;
  justify-self: flex-end;
`

class TodoList extends Component{
    constructor(props){
        super(props)
        
        this.handleChange = this.handleChange.bind(this)
    }
    fetchTodo(){
        this.props.fetchTodo()
    }
    handleChange(event){
        // event.preventDefault();
        const id = event.target.value;
        const value = event.target.checked;
        this.props.toggleTodo({id, completed: value})
    }
    render(){
        const { todos } = this.props
        let todoRow = todos.map((todo,index) => {
            return (
                <TodoItem key={index}>
                  <input type="checkbox" checked={todo.completed} onChange={this.handleChange} value={todo.id}/>
                  <TodoItemText completed={todo.completed}>{todo.title}</TodoItemText>
                  <RemoveBtn>&times;</RemoveBtn>
                </TodoItem>)
        })
        return(
            <TodoListWrapper>
            {todoRow}
            </TodoListWrapper>
        )
    }
}

const mapStateToProps = state  => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    fetchTodo: dispatch(fetchTodo()),
    toggleTodo: payload => dispatch(toggleTodo(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)