import React, { Component } from 'react';
import Header from './sections/Header';
import Splash from './sections/Splash';
import Details from './sections/Details';
import Awards from './sections/Awards';
import Sponsorships from './sections/Sponsorships';
import Sponsors from './sections/Sponsors';
import Information from './sections/Information';
import Footer from './sections/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Splash />
        <Details />
        <Awards />
        <Sponsorships />
        <Sponsors />
        <Information />
        <Footer />
      </div>
    );
  }
}

export default App;
