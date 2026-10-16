import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/signUpPage';
import HomePage from './pages/customer/HomePage';
import CustomerLayout from './components/CustomerLayout';

function App() {
  return (
    <Routes>
      <Route element={<CustomerLayout/>}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path = "/" element={<HomePage/>} />
      </Route>
    </Routes>
  );
}

export default App;