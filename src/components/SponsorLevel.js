import styled from 'styled-components';

const SponsorLevel = styled.div`
  border: 1px solid ${props => props.theme.borderColor || '#000'};
  padding: 1rem;

  h4 {
    margin: 0;
  }
`;

export default SponsorLevel;
