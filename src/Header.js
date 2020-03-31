import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: white;
`;

const H1 = styled.h1`
  position: relative;
  width: 100%;
  height: 70px;
  text-align: center;
  margin: 0;
  padding-top: 30px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  color: #6002ee;
`;

const Header = () => (
  <StyledHeader>
    <H1>Swish Link Generator</H1>
  </StyledHeader>
);

export default Header;