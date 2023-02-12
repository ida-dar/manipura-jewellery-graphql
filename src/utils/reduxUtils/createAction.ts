import { AnyAction } from '@reduxjs/toolkit';
import { STATUS_ACTION_TYPES } from './reduxTypes';

/* generic action */
export const createAction = (type: string, payload?: any): AnyAction => ({ type, payload });

/* request status actions */
export const startRequest = (name: string) => ({ type: `${name}/${STATUS_ACTION_TYPES.START_REQUEST}` });
export const endRequest = (name: string) => ({ type: `${name}/${STATUS_ACTION_TYPES.END_REQUEST}` });
export const errorRequest = (name: any) => ({ type: `${name}/${STATUS_ACTION_TYPES.ERROR_REQUEST}` });
