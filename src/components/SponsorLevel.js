import styled from 'styled-components';

const SponsorLevel = styled.div`
  align-content: start;
  display: grid;
  grid-gap: 1rem;
  grid-template: repeat(3, auto) 1fr / auto;
  padding: 1.4rem 1.6rem 1rem;

  .sponsorship__title,
  .sponsorship__price {
    line-height: 1;
    margin: 0;
    text-align: center;
  }

  .sponsorship__title {
    font-size: 1.5rem;
  }

  .sponsorship__price {
    border-bottom: 1px solid ${props => props.theme.white};
    padding-bottom: 0.8rem;
  }

  .sponsorship__benefits {
    display: grid;
    font-size: 1rem;
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
    font-size: 1rem;
    line-height: 1.6;
    padding: 0.6rem;
    text-align: center;
    text-decoration: none;

    &:active,
    &:focus,
    &:visited {
      color: ${props => props.theme.primary};
      text-decoration: none;
    }
  }
`;

export default SponsorLevel;
