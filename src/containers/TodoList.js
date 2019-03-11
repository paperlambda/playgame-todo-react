import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchTodo } from '../actions';

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
`

const RemoveBtn = styled.button`
  display: flex;
  justify-self: flex-end;
`

class TodoList extends Component{
    componentDidMount(){
    }
    fetchTodo(){
        this.props.fetchTodo()
    }
    render(){
        const { todos } = this.props
        let todoRow = todos.map((todo,index) => {
            return (
                <TodoItem key={index}>
                  <input type="checkbox"/>
                  <TodoItemText>{todo.title}</TodoItemText>
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
    fetchTodo: dispatch(fetchTodo())
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)