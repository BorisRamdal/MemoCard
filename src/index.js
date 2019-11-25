import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import appStore from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(appStore, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <div>Hello World!!!</div>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
