import { connect } from 'react-redux';
import { toggleTodo, FilterOptions, removeTodo } from '../actions';

import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case FilterOptions.SHOW_ALL:
      return todos;
    case FilterOptions.SHOW_ACTIVE:
      return todos.filter(todo => todo.completed === false)
    case FilterOptions.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed === true)
    default: return todos
  }
}

const mapStateToProps = state  => ({
    todos: getVisibleTodos(state.todos, state.filterOption)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: payload => dispatch(toggleTodo(payload)),
    onRemove: id =>  dispatch(removeTodo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)