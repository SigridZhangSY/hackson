import {combineReducers} from 'redux';
import stacks from './stacks';
import session from './session'
import clusterReducer from './clustersReducer';
import applications from './applications';
import snackbar from './snackbar';
import events from './events';
import sidebar from './sidebar';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    stacks,
    clusterReducer,
    session,
    applications,
    snackbar,
    events,
    sidebar,
    form:formReducer
});

export default rootReducer;