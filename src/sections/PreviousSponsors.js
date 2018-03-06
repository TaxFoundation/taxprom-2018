import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/SectionContainer';
import { slugify } from '../utilities/formatters';

const PreviousSponsorList = styled.ul`
  line-height: 1.6;
  text-align: center;

  @media (min-width: 520px) and (max-width: 819px) {
    column-count: 2;
  }

  @media (min-width: 820px) and (max-width: 1119px) {
    column-count: 3;
  }

  @media (min-width: 1120px) {
    column-count: 4;
  }
`;

const PreviousSponsors = props => {
  const packageSponsors = props.sponsorships.packages.map(p => p.previousSponsors).filter(p => p);
  const tableStponsors = props.sponsorships.tables.map(t => t.previousSponsors).filter(t => t);
  const allPreviousSponsors = [].concat(...packageSponsors, ...tableStponsors).sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  return (
    <SectionContainer>
      <h2>Previous Sponsors</h2>
      <PreviousSponsorList>
        {allPreviousSponsors.map((s, i) => <li key={`${slugify(s.name)}-${i}`}>{s.name}</li>)}
      </PreviousSponsorList>
    </SectionContainer>
  );
};

export default PreviousSponsors;
