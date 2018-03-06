import styled from 'styled-components';

const SponsorLevel = styled.div`
  align-content: start;
  border: 1px solid ${props => props.theme.borderColor || '#000'};
  display: grid;
  grid-gap: 1rem;
  grid-template: repeat(3, auto) 1fr / auto;
  padding: 1rem 1.6rem;

  .sponsorship__title,
  .sponsorship__price {
    line-height: 1;
    margin: 0;
    text-align: center;
  }

  .sponsorship__benefits {
    display: grid;
    font-size: 0.8rem;
    grid-gap: 0.5rem;
    line-height: 1.3;
    margin: 0 auto;
    max-width: 300px;
    padding: 0 0.3rem;
  }

  .sponsorship__pledge {
    align-self: end;
    display: block;
  }
`;

export default SponsorLevel;
