import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CartPage = () => {
  const { cart, removeItem, updateQuantity, clearCart, totalAmount } = useCart();
  const navigate = useNavigate();

  // Оформление заказа
  const handleCheckout = () => {
    alert('🌿 Спасибо за заказ! Мы бережно упакуем ваши растения и свяжемся с вами для доставки.');
    clearCart(); 
    navigate('/'); 
  };

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '60px 16px' }}>
        <h2>Ваша корзина пуста</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '16px 0 24px' }}>
          В каталоге много зелёных растений, готовых украсить ваш дом.
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Перейти к растениям
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Корзина заказов</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Товар</th>
            <th>Цена за ед.</th>
            <th>Количество</th>
            <th>Итого</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-thumb"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=100&auto=format&fit=crop&q=60';
                      }}
                    />
                  )}
                  <strong>{item.title}</strong>
                </div>
              </td>
              <td>{item.price.toLocaleString('ru-RU')} ₽</td>
              <td>
                <div className="qty-controls">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>{(item.price * item.quantity).toLocaleString('ru-RU')} ₽</td>
              <td style={{ textAlign: 'right' }}>
                <button
                  className="btn btn-danger"
                  style={{ padding: '6px 12px', fontSize: '0.85rem' }}
                  onClick={() => removeItem(item.id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <div>
          <button
            className="theme-toggle-btn"
            style={{ marginRight: '14px' }}
            onClick={clearCart}
          >
            Очистить корзину
          </button>
          <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            ← Продолжить покупки
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ textAlign: 'right' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Общая сумма:</span>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent)' }}>
              {totalAmount.toLocaleString('ru-RU')} ₽
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={handleCheckout}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};