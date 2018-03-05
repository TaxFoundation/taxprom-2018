import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.section`
  padding: 0 1rem;
`;

const Details = props => (
  <DetailsContainer>
    <h2>{props.details.detailsTitle}</h2>
    <p>{props.details.detailsDescription}</p>
  </DetailsContainer>
);

export default Details;
