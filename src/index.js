import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router } from 'react-router-dom';
import reducer from './reducers/';
import './index.css';
import Root from './components/root/index'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Root/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
