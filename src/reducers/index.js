import { FilterOptions, SET_FILTER, TOGGLE_TODO, FETCH_TODO_FULFILLED, ADD_TODO_FULFILLED } from '../actions';

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
                todos: [...state.todos, { title: action.todo.title, completed: action.todo.completed }]
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo,index) => {
                    if(index === action.index){
                        return Object.assign({}, state, {
                            completed: !todo.completed
                        })
                    }
                    return todo;
                })
            })
        default: return state
    }
}

export default todoApp;