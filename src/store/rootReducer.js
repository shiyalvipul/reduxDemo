import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import nameReducer from '../module/redux/reducer';

const appReducer = combineReducers({
  nameReducer,
  form: formReducer,
});

export default appReducer;
