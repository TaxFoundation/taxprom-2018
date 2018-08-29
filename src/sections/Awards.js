import React from 'react';
import styled from 'styled-components';

const AwardsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  h3 {
    text-align: center;
  }
`;

const Awards = () => (
  <AwardsContainer>
    <h3>2018 Distiguished Service Award</h3>
    <div>
      <p>Winner: Guy</p>
      <p>Have a picture here.</p>
    </div>
  </AwardsContainer>
);

export default Awards;
