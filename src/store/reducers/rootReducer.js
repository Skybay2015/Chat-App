import { combineReducers } from 'redux';
import appReducer from './appReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
   app: appReducer,
   registration: registrationReducer,
});

export default rootReducer;
