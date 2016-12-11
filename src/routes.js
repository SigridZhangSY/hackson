import React from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'


import Home from './pages/Home';
import SignUp from './pages/SignUp';
import IndexView from './pages/IndexView';
import DashboardTab from './components/dashboard/DashboardTab';
import StackTab from './components/stack/StackTab';
import VisibleStackList from'./containers/stack/VisibleStackList';
import VisibleStackDetail from './containers/stack/VisibleStackDetail';
import CreateStack from './components/stack/CreateStack';
import ClusterTab from './components/cluster/ClusterTab';
import VisibleClusterList from './containers/cluster/VisibleClusterList';
import AddClusterForm from './containers/cluster/AddClusterForm';
import VisibleClusterDetail from './containers/cluster/VisibleClusterDetail';
import EditClusterForm from './containers/cluster/EditClusterForm';
import ApplicationTab from './components/application/ApplicationTab';
import VisibleApplicationList from './containers/application/VisibleApplicationList';
import AddApplicationForm from './containers/application/AddApplicationForm';
import VisibleApplicationDetail from './containers/application/VisibleApplicationDetail';
import EditApplicationForm from './containers/application/EditApplicationForm';
import DeploymentDetail from './components/deployment/DeploymentDetail';
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import Header from "./containers/AppHeader";
import Layout from "./components/Layout";

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
            <Route path="/" components={{header: Header, main: Home, footer: Footer}}/>
            <Route path="signin" components={{header: Header, main: SignIn, footer: Footer}}/>
            <Route path="signup" components={{header: Header, main: SignUp, footer: Footer}}/>
            <Route components={{header: Header, main: IndexView, footer: Footer}} onEnter={requireAuth} >
                <IndexRedirect to="dashboard"/>
                <Route path="dashboard" component={DashboardTab}/>
                <Route component={StackTab}>
                    <IndexRedirect to="stacks"/>
                    <Route path="stacks" component={VisibleStackList}/>
                    <Route path="stacks/new" component={CreateStack}/>
                    <Route path="stacks/:stackId" component={VisibleStackDetail}/>
                </Route>
                <Route component={ApplicationTab}>
                    <IndexRedirect to="apps"/>
                    <Route path="apps" component={VisibleApplicationList}/>
                    <Route path="apps/new" component={AddApplicationForm}/>
                    <Route path="apps/:appName" component={VisibleApplicationDetail}/>
                    <Route path="apps/:appName/edit" component={EditApplicationForm}/>
                    <Route path="deployment" components={DeploymentDetail}/>
                </Route>
                <Route component={ClusterTab}>
                    <IndexRedirect to="clusters"/>
                    <Route path="clusters" component={VisibleClusterList}/>
                    <Route path="clusters/new" component={AddClusterForm}/>
                    <Route path="clusters/:id" component={VisibleClusterDetail}/>
                    <Route path="clusters/:id/edit" component={EditClusterForm}/>
                </Route>
            </Route>
        </Route>
    )
}