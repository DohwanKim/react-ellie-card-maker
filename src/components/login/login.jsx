import React, { useEffect } from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import styles from 'components/login/login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = userId => {
    navigate({
      pathname: '/maker',
      state: { id: userId },
    });
  };
  const onLogin = e => {
    const loginServiceName = e.currentTarget.textContent;

    authService.login(loginServiceName).then(res => {
      goToMaker(res.user.uid);
    });
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid);
    });
  });

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
