// import style
import './styles/main.less';
// import React & Redux components
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import custom smarty compponent (root container)
import App from './scripts/App';

import configureStore from './scripts/store';

const store = configureStore();

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
