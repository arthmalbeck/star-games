import watchListGames from './saga/listGames';
import watchFindGame from './saga/findGame';

export const gamesSaga = [
  watchListGames(),
  watchFindGame(),
]

export * from './actionTypes';
export * from './reducer';
export * from './service';