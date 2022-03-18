import styles from 'app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'components/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/home" element={<div />} />
          <Route path="/profile" element={<div />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
