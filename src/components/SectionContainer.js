import styled from 'styled-components';

const SectionContainer = styled.section`
  display: grid;
  grid-template: auto / minmax(auto, ${props => props.theme.maxWidth});
  justify-content: center;
  line-height: 1.4;
  padding: 0.5rem 1rem;

  @media (min-width: 500px) {
    padding: 2rem 5rem;
  }
`;

export default SectionContainer;
