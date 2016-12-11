import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes'
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    (<Provider store={store}>
        <MuiThemeProvider>
            <Router routes={routes(store)}  history={hashHistory} />
        </MuiThemeProvider>
    </Provider>),
    document.getElementById('app')
);
