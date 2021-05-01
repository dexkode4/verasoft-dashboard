import { takeEvery } from 'redux-saga/effects'

import { LOADING_USER_SUMMARY } from '../types'

function* getUserSummary() {
  yield console.log("I am saga")
}

export function* watchGetUserSummary() {
  yield takeEvery(LOADING_USER_SUMMARY, getUserSummary)
}
