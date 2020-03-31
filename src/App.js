import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const StyledApp = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Main />
      <Footer />
    </StyledApp>
  );
}

export default App;
