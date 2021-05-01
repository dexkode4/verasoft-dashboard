import { IUserSummary } from '../../interfaces'
import { LOADING_USER_SUMMARY, LOADING_USER_SUMMARY_SUCCESS, LOADING_USER_SUMMARY_FAILURE } from '../types'

export interface IGetUserSummaryAction {
  type: typeof LOADING_USER_SUMMARY
}
export interface IGetUserSummarySuccessAction {
  type: typeof LOADING_USER_SUMMARY_SUCCESS
  payload: IUserSummary
}
export interface IGetUserSummaryFailureAction {
  type: typeof LOADING_USER_SUMMARY_FAILURE
  payload: {}
}

export type UserAction = IGetUserSummaryAction | IGetUserSummarySuccessAction | IGetUserSummaryFailureAction



export const getUsersSummaryAsyncStart = () => ({
    type: LOADING_USER_SUMMARY
  });
  
  export const getUsersSummarySuccess = (data: any) => ({
    type: LOADING_USER_SUMMARY_SUCCESS,
    payload: data
  });
  