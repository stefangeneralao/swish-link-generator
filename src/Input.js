import styled from 'styled-components';

export default styled.input`
  display: block;
  margin: 0;
  border: 0;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: 300ms;
  font-family: Sen;
  font-size: 0.8rem;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    transition: 300ms;
  }

  &:focus {
    outline: none;
    box-shadow: 0 2px 10px #03dac4;
    transition: 300ms;
  }
  
  &::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
    appearance: none;
  }
`;