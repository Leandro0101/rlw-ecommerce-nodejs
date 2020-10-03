import React from 'react';

import * as Styled from '../styles';
import Footer from '../Footer';


function Register() {
  return (
    <div>

      <div className="form-group">
        <Styled.Input placeholder="Name" />
      </div>
      <div className="form-group">
        <Styled.Input placeholder="Email" />
      </div>
      <div className="form-group">
        <Styled.Input placeholder="Senha" />
      </div>

      <Footer action="Cadastrar" />

    </div>
  );
}

export default Register;