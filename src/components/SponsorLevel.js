import styled from 'styled-components';

const SponsorLevel = styled.div`
  align-content: start;
  border: 1px solid ${props => props.theme.borderColor || '#000'};
  display: grid;
  padding: 1rem 1.6rem;

  h4 {
    margin: 0;
    text-align: center;
  }

  p {
    text-align: center;
  }

  ul {
    display: grid;
    font-size: 0.8rem;
    grid-gap: 0.4rem;
    margin: 0 auto;
    max-width: 300px;
    padding: 0 0.3rem;
  }
`;

export default SponsorLevel;
