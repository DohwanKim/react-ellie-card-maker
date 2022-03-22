import React, { memo } from 'react';
import styles from 'components/header/header.module.css';

const Header = memo(({ onLogout }) => {
  return (
    <header>
      {!!onLogout && (
        <button className={styles.logoutButton} type="button" onClick={onLogout}>
          Logout
        </button>
      )}
      <img src="/images/logo.png" alt="logo" />
      <h1>Business Card Maker</h1>
    </header>
  );
});

export default Header;
