import React, { useContext } from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'

import { Context } from '../../../../Context/AuthContext'
import schema from './schema'

import '../styles.css'
import * as Styled from '../styles'
import Footer from '../Footer'

function Register() {
  const { handleRegister } = useContext(Context)

  return (
    <div>
      <Formik
        onSubmit={handleRegister}
        initialValues={{
          name: 'Werick Nalyson',
          email: 'werick123@gmail.com',
          password: 'teste123'
        }}
        validationSchema={schema}
        validateOnMount
        component={({ values, handleChange, errors }) => (
          <Form autoComplete="off" method="post">
            <div className="form-group">
              <Field name="name" className="style-input" placeholder="Nome" />
              <Styled.ErrorValidation>
                <ErrorMessage name="name" />
              </Styled.ErrorValidation>
            </div>
            <div className="form-group">
              <Field name="email" className="style-input" placeholder="Email" />
              <Styled.ErrorValidation>
                <ErrorMessage name="email" />
              </Styled.ErrorValidation>
            </div>
            <div className="form-group">
              <Field
                type="password"
                name="password"
                className="style-input"
                placeholder="Senha"
              />
              <Styled.ErrorValidation>
                <ErrorMessage name="password" className="error-validation" />
              </Styled.ErrorValidation>
            </div>

            <Footer action="Cadastrar" forgot="true" />
          </Form>
        )}
      />
    </div>
  )
}

export default Register
