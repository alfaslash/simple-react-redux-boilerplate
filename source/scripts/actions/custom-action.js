import * as types from '../const/action-types';

// Action creators section
function customActionCreator() {
	return {
		type: types.CUSTOM_ACTION,
		payload: null
	};
}

export default function customAction() {
	return dispath => {
		dispath(customActionCreator);
	};
}
