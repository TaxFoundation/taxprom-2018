import React from 'react';
import styled from 'styled-components';
import Table from '../components/Table';
import Package from '../components/Package';
import Ticket from '../components/Ticket';

const SponsorshipsSection = styled.section`
  display: grid;
`;

const TypeSection = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto;

  @media (min-width: 720) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Sponsorships = props => (
  <SponsorshipsSection>
    <TypeSection>
      {props.sponsorships.packages.map(t => {
        let id = `package-${t.name.replace(/\s+/g, '-').toLowerCase()}`;
        return <Package key={id} id={id} package={t} dates={props.dates} />;
      })}
    </TypeSection>
    <TypeSection>
      {props.sponsorships.tables.map(t => {
        let id = `table-${t.name.replace(/\s+/g, '-').toLowerCase()}`;
        return <Table key={id} id={id} table={t} dates={props.dates} />;
      })}
    </TypeSection>
    <TypeSection>
      {props.sponsorships.tickets.map(t => {
        let id = `ticket-${t.name.replace(/\s+/g, '-').toLowerCase()}`;
        return <Ticket key={id} id={id} ticket={t} dates={props.dates} />;
      })}
    </TypeSection>
  </SponsorshipsSection>
);

export default Sponsorships;
