import React from 'react';

import * as Styled from '../styles';

function footer(props) {
  return (
    <Styled.Footer>
        <Styled.Button type="submit">{props.action}</Styled.Button>
        <Styled.A href="">Esqueci a senha</Styled.A>
    </Styled.Footer>
  );
}

export default footer;