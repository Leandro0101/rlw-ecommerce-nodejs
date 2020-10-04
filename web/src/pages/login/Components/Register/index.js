import React, { useContext } from 'react';

import * as Styled from '../styles';
import Footer from '../Footer';
import { Context } from '../../../../Context/AuthContext';
import { Form, Formik } from 'formik';

function Register() {
  const { handleRegister } = useContext(Context);

  return (
    <div>
      <Formik
        onSubmit={handleRegister}
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        component={({ values, handleChange }) => (
          <Form>
            <div className="form-group">
              <Styled.Input className="styleInput" name="name" value={values.name} onChange={handleChange} placeholder="Nome" />
            </div>
            <div className="form-group">
              <Styled.Input className="styleInput" name="email" value={values.email} onChange={handleChange} placeholder="Email" />
            </div>
            <div className="form-group">
              <Styled.Input name="password" value={values.password} onChange={handleChange} placeholder="Senha" />
            </div>

            <Footer action="Cadastrar" />
          </Form>

        )}
      />


    </div>
  );
}

export default Register;