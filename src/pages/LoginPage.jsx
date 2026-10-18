import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    login(email);

    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2 style={{ marginBottom: '8px' }}>Вход в профиль</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.9rem' }}>
          Введите учётные данные для доступа к личному кабинету
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Электронная почта</label>
            <input
              type="email"
              className="form-input"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};