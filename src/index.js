import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store';

import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const app = (
    <Provider store={store}>
        <Router history={customHistory}>
            <App></App>
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

if (module.hot) {
    module.hot.accept()
};