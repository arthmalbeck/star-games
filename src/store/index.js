import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import rootSaga, { rootReducer } from '../features';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };