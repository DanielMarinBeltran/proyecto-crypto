import axios from "axios";
import {VALORES_API} from "../types/index";

export const apiValoresAction = (moneda, criptomoneda) =>{
  return async (dispatch) => {
    try{
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      dispatch(consultarData(resultado.data.DISPLAY[criptomoneda][moneda]));
    }catch {
      console.log("error")
    }
  }
};

const consultarData= (data) => ({
  type:VALORES_API,
  payload:data
});