import styled from 'styled-components';

const SectionContainer = styled.section`
  display: grid;
  grid-template: auto / minmax(auto, ${props => props.theme.maxWidth});
  justify-content: center;
  margin: 1rem;
  padding: 0.5rem 1rem;
`;

export default SectionContainer;
