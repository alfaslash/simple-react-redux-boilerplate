import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import rootReducer from './reducers/root-reducer';

export default function configureStore() {
	const initialState = Map();
	const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

	if (module.hot) {
		module.hot.accept('./reducers/root-reducer', () => {
			const nextRootReducer = require('./reducers/root-reducer');

			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
