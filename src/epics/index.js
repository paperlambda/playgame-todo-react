import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { FETCH_TODO, fetchTodoFulfilled, ADD_TODO, addTodoFulfilled, TOGGLE_TODO, toggleTodoFulfilled} from '../actions';

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
    mergeMap(action => {
        return ajax.post('https://jsonplaceholder.typicode.com/todos', {
            title: action.text,
            userId: USER_ID
        }).pipe(
            map(res => addTodoFulfilled(res.response))
        )
    })
)

const toggleTodo = action$ => action$.pipe(
    ofType(TOGGLE_TODO),
    mergeMap(action => {
        return ajax.patch(`https://jsonplaceholder.typicode.com/todos/${action.payload.id}`, {
            completed: action.payload.completed
        })
        .pipe(
            map(res => toggleTodoFulfilled(res.response))
        )
    })
)

export const rootEpic = combineEpics(
    fetchTodo,
    postTodo,
    toggleTodo
)