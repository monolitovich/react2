import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const DashboardPage = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container">
      <h2>Личный кабинет</h2>
      <div
        className="card"
        style={{ marginTop: '20px', maxWidth: '600px' }}
      >
        <h3 style={{ marginBottom: '10px' }}>Добро пожаловать, {user.name}!</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
          Email: <strong>{user.email}</strong>
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            В каталог
          </button>
          <button className="btn btn-danger" onClick={logout}>
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
};