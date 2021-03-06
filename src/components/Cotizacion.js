import React from 'react';
import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
  color: #FFF;
  span {
    font-weight: bold;
  }
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
`;

const Cotizacion = ({resultado}) => {

  // Si resultado esta vacio no muestres nada
  if(Object.keys(resultado).length === 0) return null;

  return (
    <ResultadoDiv>
      <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
      <Info>El precio mas alto del día: <span>{resultado.HIGHDAY}</span></Info>
      <Info>El precio bajo del día: <span>{resultado.LOWDAY}</span></Info>
      <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
      <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span></Info>
    </ResultadoDiv>
   );
}

export default Cotizacion;