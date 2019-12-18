import * as actionTypes from './actionTypes';


export const setNewName = newName => ({
  type: actionTypes.CHANGE_NAME,
  payload: newName,
});