import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';
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
    font-size: calc(2.6 * ${props => props.theme.fontSize});
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: calc(2 * ${props => props.theme.fontSize});
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
    slug: 'about',
    show: true,
  },
  {
    name: 'Sponsor Tax Prom',
    slug: 'sponsorships',
    show: true,
  },
  {
    name: 'Who Sponsors Tax Prom?',
    slug: 'sponsors',
    show: data.showCurrentSponsorsSection,
  },
  {
    name: 'About the Event',
    slug: 'information',
    show: true,
  },
  {
    name: 'Awards',
    slug: 'awards',
    show: data.showAwardsSection,
  },
];

class Sections extends Component {
  componentDidMount() {
    sectionRoutes.forEach(r => {
      if (`/${r.slug}` === this.props.location.pathname && r.show) {
        let theSection = document.getElementById(r.slug);
        scrollToElement(document.getElementById(r.slug), {offset: -56});
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Splash title={data.title} date={data.date} updateHeaderBG={this.updateHeaderBG} venueName={data.venueName} />
        <Details details={data.details} id={sectionRoutes[0].slug} />
        {data.showAwardsSection ? <Awards id={sectionRoutes[4].slug} /> : null}
        <Sponsorships
          id={sectionRoutes[1].slug}
          sponsorships={data.sponsorships}
          dates={{ early: data.earlyPriceEnds, regular: data.regularPriceEnds }}
        />
        {data.showCurrentSponsorsSection ? (
          <Sponsors
            id={sectionRoutes[2].slug}
            packages={data.sponsorships.packages}
            tables={data.sponsorships.tables}
          />
        ) : null}
        <PreviousSponsors sponsorships={data.sponsorships} />
        <Information
          id={sectionRoutes[3].slug}
          map={data.locationGoogleMapEmbedLink}
          date={data.date}
          venue={data.venueName}
          address={data.venueAddress}
        />
        <Footer />
      </Fragment>
    );
  }
}

class App extends Component {
  state = {
    transparentHeader: true,
  };

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

  jumpToSection() {
    const hash = {};
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <AppLayout>
            <Header routes={sectionRoutes} transparent={this.state.transparentHeader} />
            <Route path="/" render={props => <Sections {...props} />} />
          </AppLayout>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
