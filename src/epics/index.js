import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { FETCH_TODO, fetchTodoFulfilled, ADD_TODO, addTodoFulfilled, TOGGLE_TODO, toggleTodoFulfilled, REMOVE_TODO} from '../actions';

const USER_ID = 5;

const fetchTodo = action$ => action$.pipe(
    ofType(FETCH_TODO),
    mergeMap(action => {
      return ajax.get(
        `https://jsonplaceholder.typicode.com/todos?userId=${USER_ID}`
      ).pipe(
          map(res => fetchTodoFulfilled(res.response))
      )
    })
  )

const postTodo = action$ => action$.pipe(
    ofType(ADD_TODO),
    map(action => {


        // TODO: Find out why API is giving duplicate id (https://github.com/typicode/jsonplaceholder/issues/62)
        // return ajax.post('https://jsonplaceholder.typicode.com/todos', {
        //     title: action.text,
        //     userId: USER_ID,
        //     completed: false
        // }).pipe(
        //     map(res => {
        //         let toBoolean = res.response.completed === "true" ? true : false;
        //         res.response.completed = toBoolean;
        //         return addTodoFulfilled(res.response)
        //     })
        // )

        return addTodoFulfilled({
            title: action.text,
            userId: USER_ID,
            completed: false
        })
    })
)

const toggleTodo = action$ => action$.pipe(
    ofType(TOGGLE_TODO),
    map(action => {
        // TODO: Since todo is having duplicate id, toggling by id is irrelevant 
        // return ajax.patch(`https://jsonplaceholder.typicode.com/todos/${action.payload.id}`, {
        //     completed: action.payload.completed
        // })
        // .pipe(
        //     map(res => toggleTodoFulfilled(res.response))
        // )
        return toggleTodoFulfilled({
            id: action.payload.id,
            completed: action.payload.completed
        })
    })
)

export const rootEpic = combineEpics(
    fetchTodo,
    postTodo,
    toggleTodo
)