import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './sections/Header';
import Splash from './sections/Splash';
import Details from './sections/Details';
import Awards from './sections/Awards';
import Sponsorships from './sections/Sponsorships';
import Sponsors from './sections/Sponsors';
import Information from './sections/Information';
import Footer from './sections/Footer';

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 100vh auto;
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Header />
        <Splash />
        <Details />
        <Awards />
        <Sponsorships />
        <Sponsors />
        <Information />
        <Footer />
      </AppLayout>
    );
  }
}

export default App;
