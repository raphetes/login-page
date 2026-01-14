import React from 'react'
import styles from './LoginForget.module.css'
import Logo from '../assets/logo.svg?react'
import Title from './UI/Title'
import Description from './UI/Description'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import useForm from './Hooks/useForm'

const LoginForget = () => {
	const email = useForm('email')
	const fields = [
		{id: 'email', label: 'Email', placeholder: 'Digite seu email', type: 'email', hook: email}
	]
	function handleSubmit(event) {
		event.preventDefault()
		console.log('enviou formulario para resetar a senha')
	}
	return (
		 <section className={styles.wrapper}>
      <Logo />
      <div className={styles.login}>
        <Title>Resete sua senha</Title>
        <Description>
          Receba o link para alterar a senha no seu email.
        </Description>
        <LoginForm fields={fields} buttonLabel="Receber email" onSubmit={handleSubmit}/>
        <div className={styles.createWrapper}>
          <p>
            Já possui uma conta?
            <Link className={styles.create} to="/">
              Login
            </Link>
          </p>
          <p>
            Precisa se registrar?
            <Link className={styles.create} to="/create">
              Criar
            </Link>
          </p>
        </div>
      </div>
    </section>
	)
}

export default LoginForget