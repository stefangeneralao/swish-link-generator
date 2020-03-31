import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  width: 100%;
  height: 50px;
  padding-top: 30px;
`;

const GithubLink = styled.a`
  color: #333;
`;

const Footer = () => (
  <StyledFooter>
    <GithubLink href="https://github.com/stefangeneralao/swish-link-generator">
      github.com/stefangeneralao/swish-link-generator
    </GithubLink>
  </StyledFooter>
);

export default Footer;