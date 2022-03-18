import React from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = e => {
    const loginServiceName = e.currentTarget.textContent;

    console.log(loginServiceName);

    authService.login(loginServiceName).then(res => {
      console.log(res);
    });
  };
  return (
    <section className={styles.loginWrapper}>
      <Header />
      <section className={styles.loginSection}>
        <h3>Login</h3>
        <ul>
          <li>
            <button type="button" onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button type="button" onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
