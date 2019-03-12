import { connect } from 'react-redux';
import { toggleTodo, FilterOptions, removeTodo, setSelectedTodo } from '../actions';

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
    toggleTodo: (id, e) => {
      e.stopPropagation()
      return dispatch(toggleTodo(id))
    },
    onRemove: (id, e) => {
      e.stopPropagation()
      return dispatch(removeTodo(id))
    },
    selectTodo: todo => dispatch(setSelectedTodo(todo))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)