import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Styled from '../styles';
import schema from './schema';
import Footer from '../Footer';

import { Context } from '../../../../Context/AuthContext';

function SignIn() {
  const { handleLogin } = useContext(Context);

  return (
    <div>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={schema}
        validateOnMount
        onSubmit={handleLogin}
        component={({ isSubmitting }) => (
          <Form autoComplete="off">
            <div className="form-group">
              <Field name="email" className="style-input" placeholder="Email" />
              <Styled.ErrorValidation>
                <ErrorMessage name="email" />
              </Styled.ErrorValidation>
            </div>
            <div className="form-group">
              <Field type="password" name="password" className="style-input" placeholder="Senha" />
              <Styled.ErrorValidation>
                <ErrorMessage name="password" className="error-validation" />
              </Styled.ErrorValidation>
            </div>

            <Footer action="Entrar" disabled={isSubmitting} />
          </Form>

        )}
      />


    </div>
  );
}

export default SignIn;