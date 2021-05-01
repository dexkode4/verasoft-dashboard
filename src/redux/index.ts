import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { watchGetUserSummary } from './sagas/userSummary.saga'
const sagaMiddleware = createSagaMiddleWare()

const getMiddleware = () => {
  let middleware:any = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};


// sagaMiddleware.run(watchGetUserSummary)

// export default createStore(reducer, getMiddleware());

const configureStore = () => {
  const store = createStore(rootReducer, getMiddleware());
  sagaMiddleware.run(watchGetUserSummary);
  return store;
};

export default configureStore;
