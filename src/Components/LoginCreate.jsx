import React from "react";
import styles from "./LoginCreate.module.css";
import Logo from "./UI/Logo";
import Title from "./UI/Title";
import Description from "./UI/Description";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import useForm from "./Hooks/useForm";
import Input from "./Form/Input";
import Button from "./Form/Button";

const LoginCreate = () => {

	const email = useForm('email')
	const password = useForm('email')

	function handleSubmit(event) {
		event.preventDefault()	
		console.log('enviado o formulário de criar conta!')
	}
	const fields = [
		{id: "email", type: "email", label:"Email", placeholder: "Digite seu email", hook: email},
		{id: "password", type: "password", label: "Senha", placeholder: "Crie sua senha", hook: password}
	]

  return (
    <section className={styles.wrapper}>
      <Logo />
      <div className={styles.login}>
        <Title>Crie sua conta</Title>
        <Description>
          Crie sua conta para ter acesso à nossa plataforma.
        </Description>
        <LoginForm fields={fields} buttonLabel="Criar conta" onSubmit={handleSubmit}/>
        <div className={styles.createWrapper}>
          <p>
            Já possui uma conta?
            <Link className={styles.create} to="/">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginCreate;
