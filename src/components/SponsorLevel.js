import styled from 'styled-components';

const SponsorLevel = styled.div`
  align-content: start;
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
    grid-gap: 0.7rem;
    line-height: 1.3;
    margin: 0 auto 1rem;
    padding: 0 2rem;
  }

  .sponsorship__pledge {
    align-self: end;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.primary};
    cursor: pointer;
    display: block;
    line-height: 1.6;
    padding: 0.6rem;
    text-align: center;
  }
`;

export default SponsorLevel;
