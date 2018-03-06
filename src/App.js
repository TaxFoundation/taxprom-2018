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
import PreviousSponsors from './sections/PreviousSponsors';
import Information from './sections/Information';
import Footer from './sections/Footer';

const AppLayout = styled.div`
  font-family: ${props => props.theme.fontFamily};

  h1 {
    font-size: calc(3 * ${props => props.theme.fontSize});
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: calc(2.4 * ${props => props.theme.fontSize});
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: calc(1.8 * ${props => props.theme.fontSize});
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: calc(1.4 * ${props => props.theme.fontSize});
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <AppLayout>
          <Header />
          <Splash title={data.title} date={data.date} venueName={data.venueName} />
          <Details details={data.details} />
          {data.showAwardsSection ? <Awards /> : null}
          <Sponsorships
            sponsorships={data.sponsorships}
            dates={{ early: data.earlyPriceEnds, regular: data.regularPriceEnds }}
          />
          {data.showCurrentSponsorsSection ? (
            <Sponsors packages={data.sponsorships.packages} tables={data.sponsorships.tables} />
          ) : null}
          <PreviousSponsors sponsorships={data.sponsorships} />
          <Information />
          <Footer />
        </AppLayout>
      </ThemeProvider>
    );
  }
}

export default App;
