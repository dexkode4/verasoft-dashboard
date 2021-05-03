import { IUserSummary } from '../../utils/interfaces'
import {
  LOADING_USER_SUMMARY,
  LOADING_USER_SUMMARY_SUCCESS,
  LOADING_USER_SUMMARY_FAILURE,
} from '../types'

let initialState = {
  loading: false,
  data: {},
}

type action = {
    type: string,
    payload: IUserSummary
}

const userSummary =  (
  state = initialState,
  { type, payload }: action,
) => {
    switch (type) {
        case LOADING_USER_SUMMARY:
            return {
                ...state,
                loading: true
            }
        case LOADING_USER_SUMMARY_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: payload
            }
        case LOADING_USER_SUMMARY_FAILURE: 
            return {
                ...state,
                loading: false,
                data: {}
            }
    
        default:
            return state;
    }
}


export default userSummary
