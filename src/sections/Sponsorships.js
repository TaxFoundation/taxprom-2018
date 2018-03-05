import React from 'react';
import styled from 'styled-components';
import Table from '../components/Table';
import Package from '../components/Package';
import Ticket from '../components/Ticket';

const SponsorshipsSection = styled.section`
  display: grid;
  grid-template: repeat(3, auto) / auto;
`;

const LevelsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(2, auto);
`;

const Sponsorships = props => (
  <SponsorshipsSection>
    <section>
      <h3>Reception Sponsorships</h3>
      <LevelsContainer>
        {props.sponsorships.packages.map(t => {
          let id = `package-${t.name.replace(/\s+/g, '-').toLowerCase()}`;
          return <Package key={id} id={id} package={t} dates={props.dates} />;
        })}
      </LevelsContainer>
    </section>
    <section>
      <h3>Table Sponsorships</h3>
      <LevelsContainer>
        {props.sponsorships.tables.map(t => {
          let id = `table-${t.name.replace(/\s+/g, '-').toLowerCase()}`;
          return <Table key={id} id={id} table={t} dates={props.dates} />;
        })}
      </LevelsContainer>
    </section>
    <section>
      <h3>Individual Tickets</h3>
      <LevelsContainer>
        {props.sponsorships.tickets.map(t => {
          let id = `ticket-${t.name.replace(/\s+/g, '-').toLowerCase()}`;
          return <Ticket key={id} id={id} ticket={t} dates={props.dates} />;
        })}
      </LevelsContainer>
    </section>
  </SponsorshipsSection>
);

export default Sponsorships;
