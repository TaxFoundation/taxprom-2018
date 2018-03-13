import React, { Fragment } from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';
import SectionContainer from '../components/SectionContainer';
import Table from '../components/Table';
import Package from '../components/Package';
import Ticket from '../components/Ticket';
import { slugify } from '../utilities/formatters';

const LevelsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 1rem 0;

  @media (min-width: 600px) and (max-width: 1079px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }
`;

const Sponsorships = props => {
  let priceType = 'earlyPrice';
  const now = Date.now();
  if (now > new Date(props.dates.regular)) {
    priceType = 'latePrice';
  } else if (now > new Date(props.dates.early)) {
    priceType = 'regularPrice';
  }

  return (
    <Fragment>
      <BackgroundColorContainer bg="secondaryHighlight" color="primary">
        <SectionContainer>
          <h3>Reception Sponsorships</h3>
          <LevelsContainer>
            {props.sponsorships.packages.map(t => {
              let id = `package-${slugify(t.name)}`;
              return <Package key={id} id={id} package={t} />;
            })}
          </LevelsContainer>
          <h3>Table Sponsorships</h3>
          <LevelsContainer>
            {props.sponsorships.tables.map(t => {
              let id = `table-${slugify(t.name)}`;
              return <Table key={id} id={id} table={t} price={priceType} />;
            })}
          </LevelsContainer>
        </SectionContainer>
      </BackgroundColorContainer>
      <BackgroundColorContainer bg="primaryHighlight" color="white">
        <SectionContainer>
          <h3>Individual Tickets</h3>
          <LevelsContainer>
            {props.sponsorships.tickets.map(t => {
              let id = `ticket-${slugify(t.name)}`;
              return <Ticket key={id} id={id} ticket={t} />;
            })}
          </LevelsContainer>
        </SectionContainer>
      </BackgroundColorContainer>
    </Fragment>
  );
};

export default Sponsorships;
