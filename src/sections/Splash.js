import React, { Component } from 'react';
import styled from 'styled-components';
import { fullDate } from '../utilities/formatters';
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

  h1 {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
  }

  p {
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
  }
`;

class Splash extends Component {
  render() {
    let date = new Date(this.props.date);

    return (
      <SplashContainer>
        <h1>{this.props.title}</h1>
        <p>{fullDate(date)}</p>
        <p>{this.props.venueName}</p>
      </SplashContainer>
    );
  }
}

export default Splash;
