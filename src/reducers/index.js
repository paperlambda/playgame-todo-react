import { FilterOptions, SET_FILTER, FETCH_TODO_FULFILLED, ADD_TODO_FULFILLED, TOGGLE_TODO_FULFILLED, REMOVE_TODO } from '../actions';

const initialState = {
    filterOption: FilterOptions.SHOW_ALL,
    todos: []
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
                filterOption: action.filter
            })
        case ADD_TODO_FULFILLED:
            return Object.assign({}, state, {
                todos: [...state.todos, { id: action.todo.id, title: action.todo.title, completed: action.todo.completed }]
            })
        case TOGGLE_TODO_FULFILLED:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if(String(index) === action.payload.id){
                        return Object.assign({}, todo, {
                            completed: action.payload.completed
                        })
                    }
                    return todo;
                })
            })
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter((todo, index) => index !== action.index)
            })

        default: return state
    }
}

export default todoApp;