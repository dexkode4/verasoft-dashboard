import { IUserSummary } from "../../../interfaces";

export const LOADING_USER_SUMMARY = 'LOADING_USER_SUMMARY';

export const LOADING_USER_SUMMARY_SUCCESS = 'LOADING_USER_SUMMARY_SUCCESS';
export interface IGetUserSummaryAction {
    type: typeof LOADING_USER_SUMMARY;
    payload: IUserSummary
  }
export const LOADING_USER_SUMMARY_FAILURE = 'LOADING_USER_SUMMARY_FAILURE';