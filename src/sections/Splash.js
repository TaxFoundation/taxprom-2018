import React, { Component } from 'react';
import styled from 'styled-components';
import { fullDate } from '../utilities/formatters';

const SplashContainer = styled.section`
  align-content: center;
  align-items: center;
  background-color: ${props => props.theme.splashBG};
  display: grid;
  grid-gap: 1rem;
  height: 100vh;
  justify-content: center;
  justify-items: center;
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
