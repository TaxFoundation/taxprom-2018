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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
    text-transform: uppercase;
  }

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

const sectionRoutes = [
  {
    name: 'Why Tax Prom?',
    slug: 'details',
  },
  {
    name: 'Sponsor Tax Prom',
    slug: 'sponsorships',
  },
  {
    name: 'Who Sponsors Tax Prom?',
    slug: 'sponsors',
  },
  {
    name: 'About the Event',
    slug: 'information',
  },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      transparentHeader: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        this.setState({ transparentHeader: false });
      } else {
        this.setState({ transparentHeader: true });
      }
    });
  }

  updateHeaderBG() {
    this.setState({ transparentHeader: !this.transparentHeader });
  }

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <AppLayout>
          <Header routes={sectionRoutes} transparent={this.state.transparentHeader} />
          <Splash title={data.title} date={data.date} updateHeaderBG={this.updateHeaderBG} venueName={data.venueName} />
          <Details details={data.details} route={sectionRoutes[0]} />
          {data.showAwardsSection ? <Awards /> : null}
          <Sponsorships
            routes={sectionRoutes[1]}
            sponsorships={data.sponsorships}
            dates={{ early: data.earlyPriceEnds, regular: data.regularPriceEnds }}
          />
          {data.showCurrentSponsorsSection ? (
            <Sponsors
              routes={sectionRoutes[2]}
              packages={data.sponsorships.packages}
              tables={data.sponsorships.tables}
            />
          ) : null}
          <PreviousSponsors sponsorships={data.sponsorships} />
          <Information
            routes={sectionRoutes[3]}
            map={data.locationGoogleMapEmbedLink}
            date={data.date}
            venue={data.venueName}
            address={data.venueAddress}
          />
          <Footer />
        </AppLayout>
      </ThemeProvider>
    );
  }
}

export default App;
