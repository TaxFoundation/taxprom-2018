import React from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';
import SectionContainer from '../components/SectionContainer';
import PhotoA from '../images/a.jpg';
import PhotoB from '../images/b.jpg';
import PhotoC from '../images/c.jpg';
import PhotoD from '../images/d.jpg';
import PhotoE from '../images/e.jpg';
import PhotoF from '../images/f.jpg';
import PhotoG from '../images/g.jpg';
import PhotoH from '../images/h.jpg';

const TaglineContainer = SectionContainer.extend`
  padding: 2rem 3rem;

  @media (min-width: 500px) {
    padding: 5rem 9rem;
  }
`;

const DetailsList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);

  @media (min-width: 700px) {
    grid-template-columns: repeat(${props => props.statsNumber}, 1fr);
  }
`;

const StatisticItem = styled.li`
  background-color: ${props => props.theme[props.color]};
  line-height: 1.6;
  padding: 1rem 2rem;
  text-align: center;
`;

const StatisticsNumber = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;

const StatisticsText = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 25vh);

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 25vh);
  }
`;

const Photo = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: 50% 50%;
`;

const Details = props => (
  <div id={props.id}>
    <BackgroundColorContainer bg="primary" color="white">
      <TaglineContainer>
        <h2>{props.details.detailsTitle}</h2>
        <p>{props.details.detailsDescription}</p>
      </TaglineContainer>
    </BackgroundColorContainer>
    <BackgroundColorContainer bg="primary" color="white">
      <PhotoGrid>
        <Photo src={PhotoA} />
        <Photo src={PhotoB} />
        <Photo src={PhotoC} />
        <Photo src={PhotoD} />
        <Photo src={PhotoE} />
        <Photo src={PhotoF} />
        <Photo src={PhotoG} />
        <Photo src={PhotoH} />
      </PhotoGrid>
    </BackgroundColorContainer>
    <BackgroundColorContainer bg="secondary" color="white">
      <SectionContainer>
        <h3>Why You Can't Miss Tax Prom</h3>
        <DetailsList>{props.details.detailsBullets.map((d, i) => <li key={`detail-${i}`}>{d}</li>)}</DetailsList>
        <h4>In 2017 Tax Prom was Joined By</h4>
        <StatisticsList statsNumber={props.details.detailsStatistics.length}>
          {props.details.detailsStatistics.map((d, i) => (
            <StatisticItem key={`stat-${i}`} color={d.color}>
              <StatisticsNumber>{d.number}</StatisticsNumber>
              <StatisticsText>{d.text}</StatisticsText>
            </StatisticItem>
          ))}
        </StatisticsList>
      </SectionContainer>
    </BackgroundColorContainer>
  </div>
);

export default Details;
