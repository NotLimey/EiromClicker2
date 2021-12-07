import '@Scss/main.scss'
import React from 'react';
import { Route, Routes } from 'react-router'
import DefaultHelmet from './Components/DefaultHelmet';
import Home from './Pages/Home';
import LoginAndRegisterPage from './Pages/LoginAndRegisterPage';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <React.Fragment>
      <DefaultHelmet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<LoginAndRegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
