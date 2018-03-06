import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/SectionContainer';
import Table from '../components/Table';
import Package from '../components/Package';
import Ticket from '../components/Ticket';
import { slugify } from '../utilities/formatters';

const LevelsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);

  @media (min-width: 600px) and (max-width: 1079px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const Sponsorships = props => (
  <SectionContainer>
    <section>
      <h3>Reception Sponsorships</h3>
      <LevelsContainer>
        {props.sponsorships.packages.map(t => {
          let id = `package-${slugify(t.name)}`;
          return <Package key={id} id={id} package={t} dates={props.dates} />;
        })}
      </LevelsContainer>
    </section>
    <section>
      <h3>Table Sponsorships</h3>
      <LevelsContainer>
        {props.sponsorships.tables.map(t => {
          let id = `table-${slugify(t.name)}`;
          return <Table key={id} id={id} table={t} dates={props.dates} />;
        })}
      </LevelsContainer>
    </section>
    <section>
      <h3>Individual Tickets</h3>
      <LevelsContainer>
        {props.sponsorships.tickets.map(t => {
          let id = `ticket-${slugify(t.name)}`;
          return <Ticket key={id} id={id} ticket={t} dates={props.dates} />;
        })}
      </LevelsContainer>
    </section>
  </SectionContainer>
);

export default Sponsorships;
