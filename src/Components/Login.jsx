import React from "react";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import Title from "./UI/Title";
import Description from "./UI/Description";
import Logo from "./UI/Logo";
import useForm from "./Hooks/useForm";

const Login = () => {
  const email = useForm('email');
  const password = useForm('password');
  const fields = [
    {id: "email", type: "email", label:"Email", placeholder: "Digite seu email",  hook: email},
		{id: "password", type: "password", label: "Senha", placeholder: "Digite sua senha", hook: password}
  ]
  function handleSubmit(event) {
    event.preventDefault()
    console.log('enviado o formulário de login!')
  }
  return (
    <section className={styles.wrapper}>
      <Logo />
      <div className={styles.login}>
        <Title>Acesse a plataforma</Title>
        <Description>Faça login ou registre-se para começar a construir <br/> seus projetos ainda hoje.</Description>
        <LoginForm fields={fields} buttonLabel="Entrar" onSubmit={handleSubmit}/>
        <div className={styles.createWrapper}>
          <p>
            Ainda não tem uma conta? <Link className={styles.create} to="/create">Criar</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
