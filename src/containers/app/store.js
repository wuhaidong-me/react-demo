import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import _reducers from './reducers'
import _sagas from './sagas'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    ..._reducers,
    // router: routerReducer,
  }),
  applyMiddleware(sagaMiddleware, logger)
)

// then run the saga
sagaMiddleware.run(_sagas)

export default store
