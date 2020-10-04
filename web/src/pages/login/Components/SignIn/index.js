import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';

import * as Styled from '../styles';
import Footer from '../Footer';

import { Context } from '../../../../Context/AuthContext';

function SignIn() {
  const { handleLogin } = useContext(Context);

  return (
    <div>

      <Formik
        onSubmit={handleLogin}
        initialValues={{
          email: '',
          password: ''
        }}
        component={({ values, handleChange }) => (
          <Form>
            <div className="form-group">
              <Styled.Input className="styleInput" name="email" value={values.email} onChange={handleChange} placeholder="Email" />
            </div>
            <div className="form-group">
              <Styled.Input name="password" value={values.password} onChange={handleChange} placeholder="Senha" />
            </div>

            <Footer action="Entrar" />
          </Form>
        )}
      />


    </div>
  );
}

export default SignIn;