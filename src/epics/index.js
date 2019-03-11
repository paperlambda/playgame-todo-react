import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { FETCH_TODO, fetchTodoFulfilled } from '../actions';

const fetchTodo = action$ => action$.pipe(
    ofType(FETCH_TODO),
    mergeMap(action => {
      return ajax.get(
        'https://jsonplaceholder.typicode.com/todos?userId=1'
      ).pipe(
          map(res => fetchTodoFulfilled(res.response))
      )
    })
  )

export const rootEpic = combineEpics(
    fetchTodo
)