import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
`

export const Login = styled.div`
  overflow: hidden;
  background: rgb(9, 7, 73);
  display: flex;
  border: 1px solid var(--color-box-primary);
  border-radius: 1rem;
  -webkit-box-shadow: 2px 2px 4px 0px rgba(9, 7, 73, 0.59);
  -moz-box-shadow: 2px 2px 4px 0px rgba(9, 7, 73, 0.59);
  box-shadow: 2px 2px 4px 0px rgba(9, 7, 73, 0.59);
`

export const Buttons = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 1.5rem;
  padding: 2rem;
`
export const Button = styled.button`
  width: 100%;
  padding: 5px 10px 5px 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: futura, sans-serif;
  background-color: var(--color-box-secoundary);
  color: var(--color-text-base);
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  outline: none !important;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(9, 7, 73, 0.59);
  -moz-box-shadow: 2px 2px 5px 0px rgba(9, 7, 73, 0.59);
  box-shadow: 2px 2px 5px 0px rgba(9, 7, 73, 0.59);

  + Button {
    margin-top: 1.5rem;
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`
