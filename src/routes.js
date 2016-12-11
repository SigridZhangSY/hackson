import React from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import Layout from './components/Layout'


import Home from './pages/Home';

export default function routes(store) {
    function requireAuth(nextState, replace) {
        // const state = store.getState()
        // if (!state.session.isAuthenticated) {
        //     replace({
        //         pathname: '/signin'
        //     })
        // }
    }

    return (
        <Route component={Layout}>
            <Route path="/" components={{main: Home}}/>
        </Route>
    )
}