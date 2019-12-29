import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Logo Barber" />

      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Registrar</button>
        <Link to="/">Já possuo uma conta</Link>
      </form>
    </>
  );
}
