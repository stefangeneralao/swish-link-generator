import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  clear: both;
  text-align: center;
  width: 100%;
  background-color: #6002ee;
  height: 50px;
  padding-top: 30px;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.5);
`;

const GithubLink = styled.a`
  color: white;
`;

const Footer = () => (
  <StyledFooter>
    <GithubLink href="https://github.com/stefangeneralao/swish-link-generator">
      github.com/stefangeneralao/swish-link-generator
    </GithubLink>
  </StyledFooter>
);

export default Footer;