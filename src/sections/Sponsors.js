import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/SectionContainer';

const SponsorsContainer = styled.div`
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

  h4 {
    text-align: center;
  }
`;

const SponsorsSection = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  padding: 1rem;
`;

const SponsorsList = styled.ul`
  display: grid;
  grid-gap: 0.6rem;
`;

const Sponsors = props => (
  <SectionContainer>
    <section>
      <h2>Sponsors</h2>
      <section>
        <h3>Reception Sponsors</h3>
        <SponsorsContainer>
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
        </SponsorsContainer>
      </section>
      <section>
        <h3>Table Sponsors</h3>
        <SponsorsContainer>
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
        </SponsorsContainer>
      </section>
    </section>
    <section />
  </SectionContainer>
);

export default Sponsors;
