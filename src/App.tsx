import React, { Suspense, lazy } from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const AdminPannel = lazy(() => import('./pages/AdminPannel'));

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/admin/*'
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <AdminPannel />{' '}
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
