import React, { useContext } from 'react';

import * as Styled from '../styles';
import Footer from '../Footer';


function SignIn() {
  return (
    <div>

      <div className="form-group">
        <Styled.Input placeholder="Email" />
      </div>
      <div className="form-group">
        <Styled.Input placeholder="Senha" />
      </div>
      
      <Footer action="Entrar"/>

    </div>
  );
}

export default SignIn;