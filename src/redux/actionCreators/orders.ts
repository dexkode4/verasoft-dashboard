import { ISent } from '../../utils/interfaces';
import { ORDER_ASYNC_START, ORDER_ASYNC_SUCCESS, ORDER_ASYNC_FAILURE, CHANGE_TAB, GET_SUB_DATA } from '../types'


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
  
  export const changeTab = (data: string) => ({
    type: CHANGE_TAB,
    dataType: data
  });
  
  export const getSubData = (data: ISent[]) => ({
    type: GET_SUB_DATA,
    subData: data
  });
  
  export const setSubDataKey = (data: string) => ({
    type: GET_SUB_DATA,
    dataType: data
  });
  