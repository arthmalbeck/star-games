import { takeLatest, put, call } from 'redux-saga/effects';

import { listGames } from '../service';
import {
    LIST_GAMES,
    LIST_GAMES_PENDING,
    LIST_GAMES_SUCCESS,
    LIST_GAMES_FAILURE
} from '../actionTypes';

function* sagaListGames(action) {
  yield put({ type: LIST_GAMES_PENDING })

  try {
    const list = yield call(listGames)
    yield put({ 
      type: LIST_GAMES_SUCCESS, 
      list: list,
    })
  } catch (error) {
    yield put({ type: LIST_GAMES_FAILURE })
  }
}

export default function* watchListGames() {
  yield takeLatest(LIST_GAMES, sagaListGames)
}