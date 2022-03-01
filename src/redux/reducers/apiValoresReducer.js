import {VALORES_API} from '../types/index';
const initialState = {
  valores: [],
};

export default (state = initialState, action) => {
  switch(action.type){
    case VALORES_API:
      return {
        ...state,
        valores:action.payload}
    default:
      return state
  }
};