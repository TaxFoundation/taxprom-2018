import React from 'react';
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
  padding-bottom: 1rem;
`;

const PackagesContainer = LevelsContainer.extend`
  @media (min-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Tablescontainer = LevelsContainer.extend`
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TicketsContainer = LevelsContainer.extend`
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
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
    <div id={props.id}>
      <BackgroundColorContainer bg="secondaryHighlight" color="primary">
        <SectionContainer>
          <h3>Sponsorships</h3>
          {/* Packages Hidden Because All Bought */}
          {/* <PackagesContainer>
            {props.sponsorships.packages.map(t => {
              let id = `package-${slugify(t.name)}`;
              return <Package key={id} id={id} package={t} />;
            })}
          </PackagesContainer> */}
          <Tablescontainer>
            {props.sponsorships.tables.map(t => {
              let id = `table-${slugify(t.name)}`;
              return <Table key={id} id={id} table={t} price={priceType} />;
            })}
          </Tablescontainer>
        </SectionContainer>
      </BackgroundColorContainer>
      <BackgroundColorContainer bg="primaryHighlight" color="white">
        <SectionContainer>
          <h3>Individual Tickets</h3>
          <TicketsContainer>
            {props.sponsorships.tickets.map(t => {
              let id = `ticket-${slugify(t.name)}`;
              return <Ticket key={id} id={id} ticket={t} />;
            })}
          </TicketsContainer>
        </SectionContainer>
      </BackgroundColorContainer>
    </div>
  );
};

export default Sponsorships;
