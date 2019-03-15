import { createStore, combineReducers } from 'redux';

const time = (state = Date.now(), action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return Date.now();
    default:
      return state;
  }
};

export default createStore(combineReducers({
  time,
}));
