import React from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';
import SectionContainer from '../components/SectionContainer';
import mw from '../images/mark-weinberger.jpg';

const AwardeeContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template: auto / auto;

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (min-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AwardeeText = styled.div``;

const AwardeePhoto = styled.div``;

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
        <AwardeeText>
          <Name>
            <h4>Mark Weinberger</h4>
            <p style={{ textAlign: 'center' }}>Global Chairman and CEO of EY</p>
          </Name>
          <p>As EY Global Chairman and CEO, Weinberger leads one of the largest professional services organizations in the world, overseeing the operations of more than 260,000 people in more than 150 countries. </p>
          <p>Among his many accomplishments, Weinberger served as U.S. Assistant Treasury Secretary (Tax Policy) in the George W. Bush administration, on multiple advisory panels under President Bill Clinton, and worked in the U.S. Senate. He currently is on the Board of Directors of the Business Roundtable, and chairs its Tax and Fiscal Policy Committee.</p>
          <p>Throughout his career, Mark Weinberger has been one of the policy community’s leading voices on making America’s tax code more competitive and more pro-growth. The Tax Cuts and Jobs Act went a long way to helping on both fronts, and his input provided a crucial foundation for making it possible.</p>
        </AwardeeText>
        <AwardeePhoto>
          <img src={mw} alt="Mark Weinberger" style={{ width: '100%' }} />
        </AwardeePhoto>
      </AwardeeContainer>
    </SectionContainer>
  </BackgroundColorContainer>
);

export default Awards;
