import { LOADING_USER_SUMMARY, LOADING_USER_SUMMARY_SUCCESS, LOADING_USER_SUMMARY_FAILURE } from '../types'


export const getUsersSummaryAsyncStart = () => ({
    type: LOADING_USER_SUMMARY
  });
  
  export const getUsersSummarySuccess = (data: any) => ({
    type: LOADING_USER_SUMMARY_SUCCESS,
    payload: data
  });
  
  export const getUsersSummaryFailure = () => ({
    type: LOADING_USER_SUMMARY_FAILURE,
  });
  