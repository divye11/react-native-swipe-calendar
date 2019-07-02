import {
  SET_ACTIVE_INDEX
} from '../actions/types';

const INITIAL_STATE = {
  currentDateIndex: 2
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_INDEX:
      return { ...state, currentDateIndex: action.payload };
    default:
      return state;
  }
}
