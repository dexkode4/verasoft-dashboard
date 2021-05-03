import { takeEvery, call,  put } from 'redux-saga/effects'
import { getUserSummaryData } from '../../api';
import { getUsersSummaryAsyncStart, getUsersSummarySuccess, getUsersSummaryFailure } from '../actionCreators/users';
import { LOADING_USER_SUMMARY } from '../types'
import {IResponseGenerator} from '../../utils/interfaces';

function* getUserSummary() {
  try {
    const result:IResponseGenerator = yield call(getUserSummaryData);
    yield put(getUsersSummarySuccess(result?.data))
  } catch (error) {
    yield put (getUsersSummaryFailure())
  }
 
}

export function* watchGetUserSummary() {
  yield takeEvery(LOADING_USER_SUMMARY, getUserSummary)
}
