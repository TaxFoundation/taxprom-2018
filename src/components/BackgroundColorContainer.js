import styled from 'styled-components';

const BackgroundColorContainer = styled.div`
  background-color: ${props => props.theme[props.bg]};
  color: ${props => props.theme[props.color]};
  line-height: 0;
`;
export default BackgroundColorContainer;
