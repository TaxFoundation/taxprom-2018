import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './Theme';

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
  font-family: ${props => props.theme.fontFamily};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <AppLayout>
          <Header />
          <Splash title={data.title} date={data.date} venueName={data.venueName} />
          <Details details={data.details} />
          <Awards />
          <Sponsorships
            sponsorships={data.sponsorships}
            dates={{ early: data.earlyPriceEnds, regular: data.regularPriceEnds }}
          />
          <Sponsors sponsorships={data.sponsorships} />
          <Information />
          <Footer />
        </AppLayout>
      </ThemeProvider>
    );
  }
}

export default App;
