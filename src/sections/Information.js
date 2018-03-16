import React from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';
import SectionContainer from '../components/SectionContainer';
import { fullDate } from '../utilities/formatters';

const InfoHeading = styled.h2`
  font-size: 1.8rem !important;
  line-height: 1.4 !important;
`;

const VenueAddress = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

const IframeContainer = styled.div`
  min-height: 400px;
  padding-bottom: 0.5rem;

  iframe {
    height: 400px;
    height: 100%;
    min-height: 400px;
    width: 100%;
  }
`;

const Informations = props => {
  let date = new Date(props.date);

  return (
    <BackgroundColorContainer bg="primaryHighlight" color="white" id={props.id}>
      <SectionContainer>
        <InfoHeading>{`${fullDate(date)} at ${props.venue}`}</InfoHeading>
        <VenueAddress>{props.address}</VenueAddress>
        <IframeContainer>
          <iframe src={props.map} allowFullScreen title="Map to Venue" />
        </IframeContainer>
      </SectionContainer>
    </BackgroundColorContainer>
  );
};

export default Informations;
