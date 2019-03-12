export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_FULFILLED = 'ADD_TODO_FULFILLED';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_TODO_FULFILLED = 'TOGGLE_TODO_FULFILLED'
export const SET_FILTER = 'SET_FILTER';
export const FETCH_TODO = 'FETCH_TODO';
export const FETCH_TODO_FULFILLED = 'FETCH_TODO_FULFILLED';

export const FilterOptions = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

export const addTodoFulfilled = (todo) => {
    return {
        type:  ADD_TODO_FULFILLED,
        todo
    }
}

export const fetchTodo = () => {
    return {
        type: FETCH_TODO
    }
}

export const fetchTodoFulfilled = (todos) => {
    return {
        type: FETCH_TODO_FULFILLED,
        todos
    }
}

export function removeTodo(index){
    return {
        type: REMOVE_TODO,
        index
    }
}

export function setFilter(filter){
    return {
        type: SET_FILTER,
        filter
    }
}

export function toggleTodo(event){
    const target = event.target;
    const id = target.value;
    const completed = target.checked;

    return {
        type: TOGGLE_TODO,
        payload: {
            id: id,
            completed: completed
        }
    }
}

export function toggleTodoFulfilled(payload){
    return {
        type: TOGGLE_TODO_FULFILLED,
        payload: {
            id: payload.id,
            completed: payload.completed
        }
    }
}