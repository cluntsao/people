import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./container/App";
import { searchPeople, requestPeople } from './reducers';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducers = combineReducers({searchPeople, requestPeople})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware,  logger))

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
