import { IUserSummary } from '../../utils/interfaces'
import {
  ORDER_ASYNC_START,
  ORDER_ASYNC_FAILURE,
  ORDER_ASYNC_SUCCESS,
} from '../types'

let initialState = {
  loading: false,
  data: {},
}

type action = {
    type: string,
    payload: IUserSummary
}

const orders =  (
  state = initialState,
  { type, payload }: action,
) => {
    switch (type) {
        case ORDER_ASYNC_START:
            return {
                ...state,
                loading: true
            }
        case ORDER_ASYNC_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: payload
            }
        case ORDER_ASYNC_FAILURE: 
            return {
                ...state,
                loading: false,
                data: {}
            }
    
        default:
            return state;
    }
}


export default orders
