import { connect } from 'react-redux';
import { toggleTodo, FilterOptions, removeTodo } from '../actions';

import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case FilterOptions.SHOW_ALL:
      return todos;
    default: return todos
  }
}

// const toggleTodo = (event) => {
//     const id = event.target.value;
//     const value = event.target.checked;
//     dispatch(toggleTodo({id, completed: value}))
// }

const mapStateToProps = state  => ({
    todos: getVisibleTodos(state.todos, state.filterOption)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: payload => dispatch(toggleTodo(payload)),
    onRemove: index =>  dispatch(removeTodo(index))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)