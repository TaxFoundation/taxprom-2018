import React from 'react';
import styled from 'styled-components';
import BackgroundColorContainer from '../components/BackgroundColorContainer';
import SectionContainer from '../components/SectionContainer';
import Table from '../components/Table';

const SponsorsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  h4 {
    text-align: center;
  }
`;

const PackagesContainer = SponsorsContainer.extend`
  @media (min-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TablesContainer = SponsorsContainer.extend`
  @media (min-width: 920px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SponsorsSection = styled.div`
  padding: 1rem;
`;

const SponsorsList = styled.ul`
  display: grid;
  grid-gap: 0.6rem;
`;

const Sponsors = props => (
  <BackgroundColorContainer bg="secondaryHighlight" color="primary">
    <SectionContainer>
      <section>
        <h2>Sponsors</h2>
        <PackagesContainer>
          {props.packages.map((p, i) => {
            if (p.sponsors.length > 0) {
              return (
                <SponsorsSection key={`package-${i}`}>
                  <h4>{p.name}</h4>
                  <SponsorsList>
                    {p.sponsors.map((s, j) => {
                      if (s.link) {
                        return (
                          <li key={`package-${i}-sponsor-${j}`}>
                            <a href={s.link}>{s.name}</a>
                          </li>
                        );
                      } else {
                        return <li key={`package-${i}-sponsor-${j}`}>{s.name}</li>;
                      }
                    })}
                  </SponsorsList>
                </SponsorsSection>
              );
            } else {
              return null;
            }
          })}
        </PackagesContainer>
        <TablesContainer>
          {props.tables.map((t, i) => {
            if (t.sponsors.length > 0) {
              return (
                <SponsorsSection key={`table-${i}`}>
                  <h4>{t.name}</h4>
                  <SponsorsList>
                    {t.sponsors.map((s, j) => <li key={`table-${i}-sponsor-${j}`}>{s.name}</li>)}
                  </SponsorsList>
                </SponsorsSection>
              );
            } else {
              return null;
            }
          })}
        </TablesContainer>
      </section>
    </SectionContainer>
  </BackgroundColorContainer>
);

export default Sponsors;
