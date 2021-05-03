import { takeEvery, call,  put } from 'redux-saga/effects'
import { getOrders} from '../../api';
import { orderAsyncSuccess, orderAsyncStart, orderAsyncFailure } from '../actionCreators/orders';
import { ORDER_ASYNC_START } from '../types'
import {IResponseGenerator} from '../../utils/interfaces';

function* fetchOrders() {
  try {
    const result:IResponseGenerator = yield call(getOrders);
    yield put(orderAsyncSuccess(result?.data))
  } catch (error) {
    yield put (orderAsyncFailure())
  }
 
}

export function* watchGetOrders() {
  yield takeEvery(ORDER_ASYNC_START, fetchOrders)
}
