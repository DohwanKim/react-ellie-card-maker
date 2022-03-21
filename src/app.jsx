import 'assets/fonts/SUIT/SUIT.css';
import styles from 'app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'components/login/login';
import Maker from 'components/maker/maker';

function App({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} FileInput={FileInput} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
