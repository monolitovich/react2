import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { totalCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="nav-inner">
       <NavLink to="/" className="nav-brand">
      FloraSpace 🌿
      </NavLink>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                Каталог
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Корзина
                {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
              </NavLink>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Кабинет ({user.name})
                  </NavLink>
                </li>
                <li>
                  <button onClick={logout} className="theme-toggle-btn">
                    Выйти
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Войти
                </NavLink>
              </li>
            )}

            <li>
              <button onClick={toggleTheme} className="theme-toggle-btn" title="Сменить тему">
                {theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};