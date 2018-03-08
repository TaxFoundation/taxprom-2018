import React from 'react';
import styled from 'styled-components';
import { Logo, Menu } from '../components/Icons';

const StyledHeader = styled.header`
  align-content: space-between;
  align-items: end;
  background-color: ${props => (props.backgroundColor ? props.theme.headerBG : 'transparent')};
  display: grid;
  grid-template: auto / auto 1fr auto;
  left: 0;
  padding: 16px;
  position: fixed;
  right: 0;
  top: 0;
  transition: background-color 0.3s ease-in-out;
`;

const LogoLink = styled.a`
  display: block;
  height: 24px;
  grid-column: 1 /2;
`;

const MenuLink = styled.div`
  align-self: end;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  grid-column: 3 / 4;
  height: 24px;
  justify-self: end;
`;

const Header = props => (
  <StyledHeader backgroundColor={props.transparent ? false : true}>
    <LogoLink href="https://taxfoundation.org">
      <Logo fill="#fff" />
    </LogoLink>
    <MenuLink>
      <Menu fill="#fff" />
    </MenuLink>
  </StyledHeader>
);

export default Header;
