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
  grid-template-columns: 1fr;
  height: 100vh;
  justify-content: center;
  justify-items: center;
`;

const TaxPromContainer = styled.div`
  margin-bottom: 1rem;
  max-width: 900px;
  width: 100%;
`;

const InfoText = styled.p`
  font-size: 1.6rem;
  line-height: 1.2;
  margin: 0;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

const SectionLink = styled.a`
  color: #fff;
  font-size: 1.6rem;
  line-height: 1.2;
  margin: 1rem 0 0;
  text-decoration: none;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);

  &:hover,
  &:focus,
  &:visited {
    color: #fff;
    text-decoration: none;
  }
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
        <SectionLink href="#video">Watch 2017 Recap</SectionLink>
      </SplashContainer>
    );
  }
}

export default Splash;
