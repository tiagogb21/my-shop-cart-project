import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  return (
    <section className="login-container">
      <form action="">
        <h1>Olá! Digite o seu telefone, email, ou usuário</h1>
        <label htmlFor="">
          Telefone, e-mail ou usuário
          <input
            type="email"
            value={inputEmail}
            onChange={({ target }) => setInputEmail(target.value)}
          />
        </label>
        <label htmlFor="">
          <input
            type="password"
            value={inputPassword}
            onChange={({ target }) => setInputPassword(target.value)}
          />
        </label>
        <button type="button">Continuar</button>
      </form>
      <p>Criar conta</p>
      <p>Preciso de ajuda para entrar</p>
    </section>
  );
}
