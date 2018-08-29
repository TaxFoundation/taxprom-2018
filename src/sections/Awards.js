import React from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';
import SectionContainer from '../components/SectionContainer';

const Awards = () => (
  <BackgroundColorContainer bg="primary" color="white">
    <SectionContainer>
      <h3>2018 Distiguished Service Award</h3>
      <div>
        <p>Winner: Guy</p>
        <p>Have a picture here.</p>
      </div>
    </SectionContainer>
  </BackgroundColorContainer>
);

export default Awards;
