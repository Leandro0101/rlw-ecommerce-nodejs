import React, { useEffect } from 'react';

import api from '../../services/api';

function Main() {

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await api.get('/users/address')
  //         .then(response => {
  //           console.log(response.data);
  //         });
  //     } catch (error) {
  //       if (error.response.status === 404) {
  //         console.log("Nenhum endereço encontrado");
  //       }
  //     }
  //   })()
  // }, []);

  return (
  <>
    <h1>Página principal</h1>
  </>
  );
}

export default Main;