import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux';
import useMoneda from '../hooks/useMoneda';
import useCryptomoneda from '../hooks/useCriptomoneda';
import { consultarAPIAction } from '../redux/actions/consultarAPIAction';
import Error from './Error';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color 1 ease;
  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`

const Formulario = ( {guardarMoneda, guardarCriptomoneda} ) => {

  // State validacion

  const [ error, guardarError ] = useState(false);

  // Traje la info que necesito de la API
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(consultarAPIAction())
  },[]);
  const {info} = useSelector(state => state.info);
  // console.log(info)

  // MONEDAS

  const MONEDAS = [
    {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
    {codigo: 'MXN', nombre: 'Peso Mexicano'},
    {codigo: 'EUR', nombre: 'Euro'},
    {codigo: 'GBP', nombre: 'Libra Esterlina'},
    {codigo: 'COD', nombre: 'Peso Colombiano'}
  ]

  // Utilizar useMoneda

  const [ moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS);

  // Utilizar useCriptomoneda
  const [criptomoneda, SelectCripto] = useCryptomoneda('Elige tu Criptomoneda', '', info)

  // cuando el usuario hace submit
  const cotizarMoneda = e =>{
    e.preventDefault();

    // Validar si cambos campos estan llenos
    if (moneda === '' || criptomoneda === '') {
      guardarError(true);
      return;
    }

    // pasar los datos al componente principal
    guardarError(false);
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);

  }

  return (
    <form
      onSubmit={cotizarMoneda}
    >
      {error ? <Error mensaje ='Todos los campos son obligatorios'/> : null}
      <SelectMonedas/>
      <SelectCripto />
      <Boton
        type='submit'
        value='Calcular'
      />
    </form>
   );
}
export default Formulario;