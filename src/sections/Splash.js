import React from 'react';
import styled from 'styled-components';

const SplashContainer = styled.div`
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

const Splash = () => (
  <SplashContainer>
    <h1>Tax Prom</h1>
    <p>Date and Time</p>
    <p>Place</p>
  </SplashContainer>
);

export default Splash;
