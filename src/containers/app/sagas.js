import { all } from 'redux-saga/effects'
import Demo from '../demo/sagas'
import Home from '../home/sagas'

export default function* rootSaga() {
  yield all([
    ...Demo,
    ...Home,
  ])
}