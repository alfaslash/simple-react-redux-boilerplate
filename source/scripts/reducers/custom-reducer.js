import { Map } from 'immutable';
import * as types from '../const/action-types';

const defaultState = Map();
export default function customReduser(state = defaultState, action) {
	switch (action.type) {
		case types.CUSTOM_ACTION:
			return state;

		default:
			return state;
	}
}
