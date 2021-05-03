import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleWare()

const getMiddleware = () => {
  let middleware:any = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};


const configureStore = () => {
  const store = createStore(rootReducer, getMiddleware());
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
