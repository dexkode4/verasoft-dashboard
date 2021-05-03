import { all, fork } from 'redux-saga/effects'
import { watchGetUserSummary } from './userSummary.saga'
import { watchGetOrders } from './orders.saga'

export default function* rootSaga() {
  yield all([fork(watchGetUserSummary), fork(watchGetOrders)])
}
