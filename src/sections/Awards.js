import React, { Fragment } from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';
import SectionContainer from '../components/SectionContainer';
import mw from '../images/mark-weinberger.jpg';
import ba from '../images/BarbaraAngus.jpg';
import se from '../images/SteveEntin.jpg';

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

const SecondaryAwardeeContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template: auto / 1fr;
  grid-template-areas:
    'first-name'
    'first-photo'
    'first-bio'
    'second-name'
    'second-photo'
    'second-bio';

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (min-width: 920px) {
    grid-template: repeat(3, auto) / repeat(2, 1fr);
    grid-template-areas:
      'first-name second-name'
      'first-photo second-photo'
      'first-bio second-bio';
  }
`;

const AwardeeText = styled.div``;

const AwardeePhoto = styled.img`
  margin: 0 auto;
  width: 80%;
`;

const Name = styled.div`
  border-bottom: 1px solid #fff;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;

const Awards = props => (
  <Fragment>
    <BackgroundColorContainer bg="primary" color="white" id={props.id}>
      <SectionContainer>
        <h3>2018 Distinguished Service Award</h3>
        <AwardeeContainer>
          <AwardeeText>
            <Name>
              <h4>Keynote: Mark Weinberger</h4>
              <p style={{ textAlign: 'center' }}>Global Chairman and CEO of EY</p>
            </Name>
            <p>
              As EY Global Chairman and CEO, Weinberger leads one of the largest professional services organizations in
              the world, overseeing the operations of more than 260,000 people in more than 150 countries.{' '}
            </p>
            <p>
              Among his many accomplishments, Weinberger served as U.S. Assistant Treasury Secretary (Tax Policy) in the
              George W. Bush administration, on multiple advisory panels under President Bill Clinton, and worked in the
              U.S. Senate. He currently is on the Board of Directors of the Business Roundtable, and chairs its Tax and
              Fiscal Policy Committee.
            </p>
            <p>
              Throughout his career, Mark Weinberger has been one of the policy community’s leading voices on making
              America’s tax code more competitive and more pro-growth. The Tax Cuts and Jobs Act went a long way to
              helping on both fronts, and his input provided a crucial foundation for making it possible.
            </p>
          </AwardeeText>
          <AwardeePhoto src={mw} alt="Mark Weinberger" />
        </AwardeeContainer>
      </SectionContainer>
    </BackgroundColorContainer>
    <BackgroundColorContainer bg="secondary" color="white">
      <SectionContainer>
        <SecondaryAwardeeContainer>
          <h4 style={{ gridArea: 'first-name' }}>Barbara Angus</h4>
          <AwardeePhoto src={ba} alt="Barbara Angus" style={{ gridArea: 'first-photo' }} />
          <AwardeeText style={{ gridArea: 'first-bio' }}>
            <p>
              Barbara M. Angus serves as Chief Tax Counsel for the Committee on Ways and Means of the United States
              House of Representatives. She was appointed to this role by Chairman Brady in February 2016.
            </p>
            <p>
              Prior to joining the staff of the Ways and Means Committee, Barbara was a Principal with EY and a member
              of the National Tax Department. Based in Washington, D.C., she led EY’s Strategic International Tax Policy
              Services practice. Barbara previously served in the Department of the Treasury, the Congressional Joint
              Committee on Taxation, and as a U.S. representative on the OECD’s fiscal affairs committee.
            </p>
          </AwardeeText>
          <h4 style={{ gridArea: 'second-name' }}>Stephen Entin</h4>
          <AwardeePhoto src={se} alt="Stephen Entin" style={{ gridArea: 'second-photo' }} />
          <AwardeeText style={{ gridArea: 'second-bio' }}>
            <p>
              Stephen J. Entin is a Senior Fellow at the Tax Foundation, where he conducts policy analysis and provides
              technical expertise for the foundation’s renowned Taxes and Growth model.
            </p>
            <p>
              Mr. Entin is a former Deputy Assistant Secretary for Economic Policy at the Department of the Treasury
              during the Reagan administration. He prepared economic forecasts for the President’s budgets and assisted
              in the development of the 1981 tax cuts.
            </p>
            <p>
              Previously, he was President and Executive Director at the Institute for Research on the Economics of
              Taxation, a staff economist with the Joint Economic Committee of Congress, and an advisor to the the
              National Commission on Economic Growth and Tax Reform (the Kemp Commission). He assisted in the drafting
              of the Kemp Commission’s report, and was the author of several of its support documents.
            </p>
          </AwardeeText>
        </SecondaryAwardeeContainer>
      </SectionContainer>
    </BackgroundColorContainer>
  </Fragment>
);

export default Awards;
