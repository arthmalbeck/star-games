import watchListGames from './saga/listGames';

export const gamesSaga = [
  watchListGames(),
]

export * from './actionTypes';
export * from './reducer';
export * from './service';