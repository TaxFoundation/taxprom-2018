import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/SectionContainer';
import { fullDate } from '../utilities/formatters';

const InfoHeading = styled.h2`
  font-size: 1.8rem !important;
  line-height: 1.4 !important;
`;

const Informations = props => {
  let date = new Date(props.date);

  return (
    <SectionContainer>
      <InfoHeading>{`${fullDate(date)} at ${props.venue}`}</InfoHeading>
      <p>{props.address}</p>
    </SectionContainer>
  );
};

export default Informations;
