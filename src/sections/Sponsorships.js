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
      {props.sponsorships.packages.map(p => (
        <Package key={`package-${p.name.replace(/\s+/g, '-').toLowerCase()}`} package={p} />
      ))}
    </TypeSection>
    <TypeSection>
      {props.sponsorships.tables.levels.map(t => (
        <Table key={`table-${t.name.replace(/\s+/g, '-').toLowerCase()}`} package={t} />
      ))}
    </TypeSection>
    <TypeSection>
      {props.sponsorships.tickets.map(t => (
        <Ticket key={`ticket-${t.name.replace(/\s+/g, '-').toLowerCase()}`} package={t} />
      ))}
    </TypeSection>
  </SponsorshipsSection>
);

export default Sponsorships;
