import { takeLatest, put, select } from 'redux-saga/effects';

import {
    FIND_GAME,
    FIND_GAME_PENDING,
    FIND_GAME_SUCCESS,
    FIND_GAME_FAILURE
} from '../actionTypes';
import { findGameById } from '../../../utils/findGame';

function* sagaFindGame(action) {
  yield put({ type: FIND_GAME_PENDING });

  try {
    const state = yield select();
    const { list } = state.gamesReducer;

    if (list !== null) {
        const game = yield findGameById(action.id, list);
        yield put({ 
            type: FIND_GAME_SUCCESS, 
            game: game,
        });
    }
  } catch (error) {
    yield put({ type: FIND_GAME_FAILURE });
  }
}

export default function* watchFindGame() {
  yield takeLatest(FIND_GAME, sagaFindGame)
}