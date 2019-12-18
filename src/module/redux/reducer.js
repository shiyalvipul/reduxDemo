import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  name: 'vipul'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
