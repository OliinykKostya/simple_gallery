import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import imagesReducer from './images'
import isLoadingReducer from './isLoading'
import { watchLoadData } from '../sagas';

export const getImage = (state) => state.images;
export const getIsloading = (state) => state.isLoading;

const rootReducer = combineReducers({
  images: imagesReducer,
  isLoading: isLoadingReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger,sagaMiddleware))
sagaMiddleware.run(watchLoadData)

export default store;