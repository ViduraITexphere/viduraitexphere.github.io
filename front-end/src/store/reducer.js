import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import authReducer from './reducers/authReducer';
// ==============================|| COMBINE REDUCER ||============================== //

// const reducer = combineReducers({
//     customization: customizationReducer
// });

export default combineReducers({customization: customizationReducer, authReducer});
