import axios from "axios";
import {CONSULTA_API} from "../types/index";

export const consultarAPIAction = () =>{
  return async (dispatch) => {
    try{
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);
      dispatch(consultarData(resultado.data.Data));
    }catch {
      console.log("error")
    }
  }
};

const consultarData= (data) => ({
  type:CONSULTA_API,
  payload:data
});