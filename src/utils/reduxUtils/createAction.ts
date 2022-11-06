import { AnyAction } from '@reduxjs/toolkit';
import { STATUS_ACTION_TYPES } from './reduxTypes';

/* generic action */
export const createAction = (type: any, payload: any): AnyAction => ({ payload, type });

/* request status actions */
export const startRequest = () => ({ type: STATUS_ACTION_TYPES.START_REQUEST });
export const endRequest = () => ({ type: STATUS_ACTION_TYPES.END_REQUEST });
export const errorRequest = () => ({ type: STATUS_ACTION_TYPES.ERROR_REQUEST });
