import { STATUS_ACTION_TYPES } from './statusActions';

/* generic action */
export const createAction = (payload: any, type: string) => ({ payload, type });

/* request status actions */
export const startRequest = (payload: any) => ({ payload, type: STATUS_ACTION_TYPES.START_REQUEST });
export const endRequest = (payload: any) => ({ payload, type: STATUS_ACTION_TYPES.END_REQUEST });
export const errorRequest = (payload: any) => ({ payload, type: STATUS_ACTION_TYPES.ERROR_REQUEST });
