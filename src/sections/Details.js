import React from 'react';
import SectionContainer from '../components/SectionContainer';

const Details = props => (
  <SectionContainer>
    <h2>{props.details.detailsTitle}</h2>
    <p>{props.details.detailsDescription}</p>
  </SectionContainer>
);

export default Details;
