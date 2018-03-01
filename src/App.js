import React, { Component } from 'react';
import styled from 'styled-components';

import data from './data/taxprom2018.json';
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
  font-family: 'Futura', sans-serif;
  grid-template-rows: 100vh auto;
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Header />
        <Splash title={data.title} date={data.date} venueName={data.venueName} />
        <Details details={data.details} />
        <Awards />
        <Sponsorships sponsorships={data.sponsorships} />
        <Sponsors sponsorships={data.sponsorships} />
        <Information />
        <Footer />
      </AppLayout>
    );
  }
}

export default App;
