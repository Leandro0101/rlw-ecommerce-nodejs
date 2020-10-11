import React from 'react';

import * as Styled from '../styles';

const footer = ({ forgot, action, disabled }) => {
  return (
    <Styled.Footer>
        <Styled.Button type="submit" disabled={disabled}>{action}</Styled.Button>
        {forgot ? <Styled.A href="">Esqueci a senha</Styled.A> : ""}
    </Styled.Footer>
  );
}

export default footer;