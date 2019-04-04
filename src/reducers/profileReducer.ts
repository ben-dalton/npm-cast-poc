import { actionTypes } from '../actions/actionTypes';

type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  initialized: false,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.init:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export default reducer;
