import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router } from 'react-router-dom';
import {save} from "redux-localstorage-simple";
import reducer from './reducers/';
import './index.css';
import Root from './containers/root/index'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk, save()));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Root/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
