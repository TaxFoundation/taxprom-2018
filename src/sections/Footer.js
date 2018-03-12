import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/SectionContainer';
import { Logo } from '../components/Icons';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.footerBG};
`;

const FooterContent = styled.div`
  color: #fff;
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'logo'
    'address'
    'disclaimer';
  grid-template-columns: auto;
  grid-template-rows: 40px repeat(2, auto);
  padding: 0.5rem 0;

  @media (min-width: 800px) {
    grid-template-areas:
      'logo    . disclaimer'
      'address . disclaimer';
    grid-template-columns: minmax(300px, 500px) 1fr minmax(350px, 1fr);
    grid-template-rows: 50px auto;
  }
`;

const LogoSection = styled.div`
  grid-area: logo;
`;

const ContactInfo = styled.div`
  grid-area: address;
`;

const Disclaimer = styled.div`
  font-size: 0.8rem;
  grid-area: disclaimer;

  a {
    color: #fff;

    &:focus,
    &:active,
    &:visited {
      color: #fff;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <SectionContainer>
      <FooterContent>
        <LogoSection>
          <Logo fill="#fff" />
        </LogoSection>
        <ContactInfo>
          <p>
            1325 G Street NW<br />Suite 950<br />Washington, DC 20005
          </p>
        </ContactInfo>
        <Disclaimer>
          <p>
            The Tax Foundation is a 501(c)(3) nonprofit educational organization, IRS EIN #52-1703065. We do not
            participate in any lobbying. Your gift is tax-deductible to the extent allowed by law. For purposes of
            congressional ethical rules, this dinner is a widely attended event. For media credentials,{' '}
            <a href="https://taxfoundation.org/contact/">please contact John Buhl through our website</a>.
          </p>
        </Disclaimer>
      </FooterContent>
    </SectionContainer>
  </FooterContainer>
);

export default Footer;
