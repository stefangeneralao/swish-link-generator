import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import { getSwishLink } from './utils';

const StyledMain = styled.main`
  overflow: auto;
  margin: auto;
  max-width: 425px;
  padding: 20px;
`;

const P = styled.p`
  text-align: center;
`;

const SwishLink = styled.a`
  word-wrap: break-word;
  text-align: center;
`;

const Main = () => {
  const [ payee, setPayee ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ swishLink, setSwishLink ] = useState(null);

  useEffect(() => {
    if (!payee && !amount && !message) {
      setSwishLink();
    } else {
      setSwishLink(getSwishLink(payee, false, amount, false, message, false));
    }
  }, [ payee, amount, message ]);
  
  return (
    <StyledMain>
      <Input
        type="number"
        value={ payee }
        onChange={ e => { setPayee(e.currentTarget.value) } }
        placeholder="Mottagare"
      />
      <Input
        type="number"
        value={ amount }
        onChange={ e => { setAmount(e.currentTarget.value) } }
        placeholder="Summa"
      />
      <Input
        type="text"
        value={ message }
        onChange={ e => { setMessage(e.currentTarget.value) } }
        placeholder="Meddelande"
      />
      { swishLink && (
        <>
          <P>
            Använd gärna mobilen med Swish installerat och tryck på länken:
          </P>
          <SwishLink href={ swishLink }>{ swishLink }</SwishLink>
        </>
      ) }
    </StyledMain>
  );
}

export default Main;