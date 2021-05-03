import { ISent } from '../../utils/interfaces'
import {
  ORDER_ASYNC_START,
  ORDER_ASYNC_SUCCESS,
  ORDER_ASYNC_FAILURE,
  CHANGE_TAB,
  GET_SUB_DATA,
  SET_SUB_DATA_KEY,
  GET_SUB_DATA_STOP,
  GET_SUB_DATA_START,
} from '../types'

export const orderAsyncStart = () => ({
  type: ORDER_ASYNC_START,
})

export const orderAsyncSuccess = (data: any) => ({
  type: ORDER_ASYNC_SUCCESS,
  payload: data,
})

export const orderAsyncFailure = () => ({
  type: ORDER_ASYNC_FAILURE,
})

export const changeTab = (data: string) => ({
  type: CHANGE_TAB,
  dataType: data,
})

export const getSubData = (data: ISent[]) => ({
  type: GET_SUB_DATA,
  subData: data,
})

export const setSubDataKey = (data: string) => ({
  type: SET_SUB_DATA_KEY,
  dataType: data,
})

export const startGetSubData = () => ({
  type: GET_SUB_DATA_START,
})
export const stopGetSubData = () => ({
  type: GET_SUB_DATA_STOP,
})
