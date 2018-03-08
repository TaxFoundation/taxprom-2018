import styled from 'styled-components';

const SectionContainer = styled.section`
  justify-content: center;
  display: grid;
  grid-template: auto / minmax(auto, ${props => props.theme.maxWidth});
  padding: 0 1rem;
`;

export default SectionContainer;
