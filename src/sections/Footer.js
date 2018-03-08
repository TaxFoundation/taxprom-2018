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
  grid-template-columns: minmax(300px, 500px) 1fr minmax(350px, 1fr);
  grid-template-rows: 50px auto;
  padding: 0.5rem 0;
`;

const LogoSection = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const ContactInfo = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const Disclaimer = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
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
