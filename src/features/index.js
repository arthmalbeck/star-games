import { all } from 'redux-saga/effects';

import { gamesSaga, gamesReducer } from './games';


export default function* rootSaga() {
  yield all([
    ...gamesSaga,
  ])
}

export const rootReducer = {
    gamesReducer,
}

export * from './games';