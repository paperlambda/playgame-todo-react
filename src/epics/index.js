import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { FETCH_TODO, fetchTodoFulfilled, ADD_TODO, addTodoFulfilled } from '../actions';

const USER_ID = '6677182'

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

export const rootEpic = combineEpics(
    fetchTodo,
    postTodo
)