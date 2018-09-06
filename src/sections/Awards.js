import React from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';
import SectionContainer from '../components/SectionContainer';
import mw from '../images/mark-weinberger.jpg';

const AwardeeContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template: auto / auto;

  @media (min-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Name = styled.div`
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;

const Awards = props => (
  <BackgroundColorContainer bg="primary" color="white" id={props.id}>
    <SectionContainer>
      <h3>2018 Distiguished Service Award</h3>
      <AwardeeContainer>
        <div>
          <Name>
            <h4>Mark Weinberger</h4>
            <p style={{ textAlign: 'center' }}>Global Chairman and CEO of EY</p>
          </Name>
          <p>Bio goes here.</p>
        </div>
        <div>
          <img src={mw} alt="Mark Weinberger" style={{ width: '100%' }} />
        </div>
      </AwardeeContainer>
    </SectionContainer>
  </BackgroundColorContainer>
);

export default Awards;
