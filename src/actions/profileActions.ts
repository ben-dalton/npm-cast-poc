import { actionTypes } from './actionTypes';
import axios from 'axios';

export const initializeProfile = () => (dispatch: any, getState: any) => {
  dispatch({ type: actionTypes.init });
  dispatch({ type: actionTypes.fetch_start });
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: actionTypes.fetch_complete, payload: data }))
    .catch(error =>
      dispatch({ type: actionTypes.fetch_error, payload: error }),
    );
};
