import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SuccessPage = styled.div`
  align-content: stretch;
  align-items: center;
  background-color: ${props => props.theme.primaryHighlight};
  bottom: 0;
  display: grid;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const SuccessContent = styled.div`
  color: ${props => props.theme.white};
  font-size: 2rem;
  line-height: 1.4;
  max-width: 500px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  background-color: ${props => props.theme.secondary};
  border-radius: 6px;
  color: ${props => props.theme.white};
  display: block;
  margin-top: 2rem;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.secondaryHighlight};
  }
`;

const Success = props => (
  <SuccessPage>
    <SuccessContent>
      <p>Success! Check your email for verification. We will get back to you soon!</p>
      <StyledLink to="/">Back to Main Page</StyledLink>
    </SuccessContent>
  </SuccessPage>
);

export default Success;
