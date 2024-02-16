import React from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminPannel from './pages/AdminPannel';

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.content} id='start'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminPannel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
