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
  background-color: ${props => props.theme.primary};
  border-radius: 4px;
  color: #fff;
  font-size: 1.4rem;
  line-height: 1.2;
  margin: 3rem 0 0;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:focus,
  &:visited {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background-color: ${props => props.theme.secondary};
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
        {this.props.showVideo ? <SectionLink href="#video">Watch 2017 Recap</SectionLink> : null}
      </SplashContainer>
    );
  }
}

export default Splash;
