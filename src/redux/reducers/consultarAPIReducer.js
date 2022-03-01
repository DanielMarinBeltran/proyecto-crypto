import {CONSULTA_API} from '../types/index';

const initialState = {
  info: [],
};

export default (state = initialState, action) => {
  switch(action.type){
    case CONSULTA_API:
      return {
        ...state,
        info:action.payload}
    default:
      return state
  }
};