import { ORDER_ASYNC_START, ORDER_ASYNC_SUCCESS, ORDER_ASYNC_FAILURE } from '../types'


export const orderAsyncStart = () => ({
    type: ORDER_ASYNC_START
  });
  
  export const orderAsyncSuccess = (data: any) => ({
    type: ORDER_ASYNC_SUCCESS,
    payload: data
  });
  
  export const orderAsyncFailure = () => ({
    type: ORDER_ASYNC_FAILURE,
  });
  