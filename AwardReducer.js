// https://alligator.io/react/react-native-redux/

import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ],
};

const awardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  awards: awardReducer,
});
