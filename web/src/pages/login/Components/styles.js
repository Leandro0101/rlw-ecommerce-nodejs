import styled from 'styled-components';

export const Footer = styled.div`
  display: grid;
  align-items: center;
`

export const A = styled.a`
  color: var(--color-text-base);
  font-family: futura, sans-serif;
  text-decoration: none;
  margin-top: 1rem;
  text-align: right;
`

export const Button = styled.button`
  width: 100%;
  background-color: var(--color-box-secoundary);
  outline: none !important;
  border: none;
  border-radius: 0.4rem;
  padding: 5px 10px 5px 10px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(9,7,73,0.59);
  -moz-box-shadow: 2px 2px 5px 0px rgba(9,7,73,0.59);
  box-shadow: 2px 2px 5px 0px rgba(9,7,73,0.59);

  :disabled {
    opacity: 0.5;
  }
`
export const Input = styled.input`
  /* .styleInput{ */
    width: 100%;
    border: none;
    border-radius: 0.2rem;
    padding: 5px 3px 5px 3px;
    font-family: futura, sans-serif;
    /* } */
    `

export const ErrorValidation = styled.div`
  color: #fff;
  font-family: futura, sans-serif;
  margin-top: 0.4rem;
`