import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import "babel-core/register";
import "babel-polyfill";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
const reducer = require('./store/reducer');

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);