import React, { useState } from "react";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  return (
    <form action="">
      <h1>Olá! Digite o seu telefone, email, ou usuário</h1>
      <label htmlFor="">
        Telefone, e-mail ou usuário
        <input
          type="email"
          value={inputEmail}
          onClick={({ target }) => setInputEmail(target.value)}
        />
      </label>
      <label htmlFor="">
        <input
          type="password"
          value={inputPassword}
          onClick={({ target }) => setInputPassword(target.value)}
        />
      </label>
    </form>
  );
}
