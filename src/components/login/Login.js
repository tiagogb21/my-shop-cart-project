import "./Login.css";

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

import logomlbig from "../../assets/img/logomlbig.png";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [verify, setVerify] = useState(true);

  const location = useLocation();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length > 0;
  };

  const redirectToHome = () => {
    window.location.href = "products";
  };

  return (
    <section className="login_container">
      <nav className="nav_container">
        <img src={logomlbig} alt="logo ml" />
        <p>Contato</p>
      </nav>
      <section className="form_container">
        <form action="">
          {verify ? (
            <>
              <h1>Olá! Digite o seu telefone, email, ou usuário</h1>
              <section className="container_email">
                <p>Telefone, e-mail ou usuário</p>
                <TextField
                  id="filled-basic"
                  value={inputEmail}
                  onChange={({ target }) => setInputEmail(target.value)}
                  variant="outlined"
                  fullWidth
                />
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => {
                    validateEmail(inputEmail) && setVerify(false);
                  }}
                  fullWidth
                >
                  Continuar
                </Button>
                <p>
                  <span>Criar conta</span>
                </p>
                <p>
                  <span>Preciso de ajuda para entrar</span>
                </p>
              </section>
            </>
          ) : (
            <>
              <h1>Agora, sua senha do Mercado Livre</h1>
              <section className="container_password">
                <TextField
                  id="filled-hidden-label-small"
                  type="password"
                  value={inputPassword}
                  onChange={({ target }) => setInputPassword(target.value)}
                  variant="outlined"
                  fullWidth
                />
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => {
                    validatePassword(inputPassword) && redirectToHome();
                  }}
                  fullWidth
                >
                  Entrar
                </Button>
                <p>Esqueceu sua senha?</p>
              </section>
            </>
          )}
        </form>
      </section>
    </section>
  );
}
