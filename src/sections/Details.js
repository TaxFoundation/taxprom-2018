import React, { Fragment } from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';
import SectionContainer from '../components/SectionContainer';

const TaglineContainer = SectionContainer.extend`
  padding: 2rem 3rem;

  @media (min-width: 500px) {
    padding: 5rem 9rem;
  }
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  > * {
    border: 1px solid #000;
  }
`;

const DetailsList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  line-height: 1.6;
  padding: 1rem;
`;

const StatisticsList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    border: 1px solid #000;
    line-height: 1.6;
    padding: 1rem 2rem;
    text-align: center;
  }
`;

const Details = props => (
  <Fragment>
    <BackgroundColorContainer bg="primary" color="white">
      <TaglineContainer>
        <h2>{props.details.detailsTitle}</h2>
        <p>{props.details.detailsDescription}</p>
      </TaglineContainer>
    </BackgroundColorContainer>
    <SectionContainer>
      <DetailsContainer>
        <DetailsList>{props.details.detailsBullets.map((d, i) => <li key={`detail-${i}`}>{d}</li>)}</DetailsList>
        <div>Photos Go Here</div>
      </DetailsContainer>
      <h2>Why You Can't Miss Tax Prom</h2>
      <h3>In 2017 Tax Prom was Joined By</h3>
      <StatisticsList>{props.details.detailsStatistics.map((d, i) => <li key={`stat-${i}`}>{d}</li>)}</StatisticsList>
    </SectionContainer>
  </Fragment>
);

export default Details;
