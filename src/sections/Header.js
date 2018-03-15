import React, { Component } from 'react';
import styled from 'styled-components';
import scrollToElement from 'scroll-to-element';
import { Link } from 'react-router-dom';
import { Logo, MenuIcon } from '../components/Icons';

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

const Menu = styled.div`
  background-color: ${props => props.theme.primary};
  bottom: 0;
  display: grid;
  grid-template-rows: 56px auto;
  position: fixed;
  right: 0;
  transform: translateX(${props => (props.show ? '0' : '100%')});
  top: 0;
  width: 100%;
  z-index: 100;

  @media (min-width: 500px) {
    width: 300px;
  }
`;

class Header extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    let menu = !this.state.showMenu;
    console.log(menu);
    this.setState({ showMenu: menu });
  }

  goToSection(id) {
    scrollToElement(document.getElementById(id), { offset: -56 });
  }

  render() {
    return (
      <StyledHeader backgroundColor={this.props.transparent ? false : true}>
        <LogoLink href="https://taxfoundation.org">
          <Logo fill="#fff" />
        </LogoLink>
        <MenuLink onClick={this.toggleMenu}>
          <MenuIcon fill="#fff" />
        </MenuLink>
        <Menu show={this.state.showMenu}>
          <p onClick={this.toggleMenu}>Close</p>
          {this.props.routes.map(r => {
            return (
              <Link key={`nav-${r.slug}`} to={`/${r.slug}`} onClick={e => this.goToSection(r.slug)}>
                {r.name}
              </Link>
            );
          })}
        </Menu>
      </StyledHeader>
    );
  }
}

export default Header;
