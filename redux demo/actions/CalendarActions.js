import {
  SET_ACTIVE_INDEX
} from './types';

export const SetActiveIndex = (index) => {
  return {
    type: SET_ACTIVE_INDEX,
    payload: index
  };
};
