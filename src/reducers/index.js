import { FilterOptions, SET_FILTER, FETCH_TODO_FULFILLED, ADD_TODO_FULFILLED, TOGGLE_TODO_FULFILLED, REMOVE_TODO, SET_SELECTED_TODO } from '../actions';

const initialState = {
    filterOption: FilterOptions.SHOW_ALL,
    todos: [],
    lastId: null,
    selectedTodo: null
}

function todoApp(state, action){
    if(typeof state === 'undefined') return initialState;

    switch(action.type){
        case FETCH_TODO_FULFILLED:
            return Object.assign({}, state, {
                todos: action.todos
            })
        case SET_FILTER:
            return Object.assign({}, state, {
                filterOption: action.filter,
                selectedTodo: null
            })
        case ADD_TODO_FULFILLED:
            // TODO: Make up id 
            let setId = state.lastId ? state.lastId+=1 : action.todo.id;

            return Object.assign({}, state, {
                lastId: setId,
                todos: [{ id: setId, title: action.todo.title, completed: action.todo.completed }, ...state.todos]
            })
        case TOGGLE_TODO_FULFILLED:
            let findTodo;

            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if(todo.id === action.id){
                        findTodo = Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                        return findTodo;
                    }
                    return todo;
                }),
                selectedTodo: findTodo 
            })
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => todo.id !== action.id)
            })

        case SET_SELECTED_TODO:
            return Object.assign({}, state, {
                selectedTodo: action.todo
            })

        default: return state
    }
}

export default todoApp;