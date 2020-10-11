import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import api from '../../services/api';

function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(values, { setSubmitting, resetForm }) {
    const { email, password } = values;

    try {
      const res = await api.post('/authentication', {
        email,
        password
      });

      const token = res.data.user.token;

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.authorization = `Bearer ${token}`;
      setAuthenticated(true);

      resetForm({ values: { email: '', password: '' } });
      setSubmitting(false);

      history.push('/');

    } catch (err) {
      const error = err.response;

      if (error.status === 404) {
        alert("Email ou senha inválidos!");
      }
    }
  }

  async function handleRegister({ name, email, password }) {
    await api.post('/users', {
      name,
      email,
      password
    }).then(response => {
      console.log(response);
    }).console.log(error => {
      console.log(error);
    });
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return { authenticated, handleLogin, handleRegister, handleLogout, loading };
}

export default useAuth;