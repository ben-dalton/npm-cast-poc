import { actionTypes } from '../actions/actionTypes';

type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  initialized: false,
  entity: {
    name: 'D. Fault',
  },
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.init:
      return {
        ...initialState,
        initialized: true,
      };
    case actionTypes.fetch_start:
      return {
        ...state,
        async: true,
      };
    case actionTypes.fetch_complete:
      return {
        ...state,
        users: action.payload.data,
        async: false,
      };
    case actionTypes.fetch_error:
      return {
        ...state,
        users: [],
        async: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
