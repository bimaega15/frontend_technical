import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import adminReducer from './adminReducer';
import employeeReducer from './employeeReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  admin: adminReducer,
  employee: employeeReducer
});

export default reducer;
