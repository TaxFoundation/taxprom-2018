import React, { Component } from 'react';
import styled from 'styled-components';
import { fullDate } from '../utilities/formatters';
import { TaxProm } from '../components/Icons';
import splash from '../images/splash.jpg';

const SplashContainer = styled.section`
  align-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  background-image: url(${splash});
  background-position: 50% 50%;
  background-size: cover;
  color: #fff;
  display: grid;
  grid-gap: 1rem;
  height: 100vh;
  justify-content: center;
  justify-items: center;
`;

const TaxPromContainer = styled.div`
  margin-bottom: 1rem;
  max-width: 900px;
`;

const InfoText = styled.p`
  font-size: 1.6rem;
  line-height: 1.2;
  margin: 0;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

class Splash extends Component {
  render() {
    let date = new Date(this.props.date);

    return (
      <SplashContainer>
        <TaxPromContainer>
          <TaxProm />
        </TaxPromContainer>
        <InfoText>{fullDate(date)}</InfoText>
        <InfoText>{this.props.venueName}</InfoText>
      </SplashContainer>
    );
  }
}

export default Splash;
