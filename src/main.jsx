import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroductionRoutes from './routes/Introduction.router.jsx';
import LoginRoutes from './routes/Login.router.jsx';
import RegisterRoutes from './routes/Register.router.jsx';
import VitrineRouter from './routes/Vitrine.router.jsx';
import LivroRoutes from './routes/Livro.router.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroductionRoutes />} />
        <Route path="/login" element={<LoginRoutes />} />
        <Route path="/register" element={<RegisterRoutes />} />
        <Route path="/vitrine" element={<VitrineRouter />} />
        <Route path="/livro" element={<LivroRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

