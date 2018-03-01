import React from 'react';
import styled from 'styled-components';
import { fullDate } from '../utilities/formatters';

const SplashContainer = styled.section`
  align-content: center;
  align-items: center;
  bottom: 0;
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Splash = props => {
  let date = new Date(props.date);

  return (
    <SplashContainer>
      <h1>{props.title}</h1>
      <p>{fullDate(date)}</p>
      <p>{props.venueName}</p>
    </SplashContainer>
  );
};

export default Splash;
