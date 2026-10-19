import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="card-img"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60';
          }}
        />
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <h3 className="card-title">{product.title}</h3>
          <p className="card-desc">{product.description}</p>
        </div>

        <div>
          <div className="card-footer">
            <span className="card-price">{product.price.toLocaleString('ru-RU')} ₽</span>
            <button className="btn btn-primary" onClick={handleAdd}>
              В корзину
            </button>
          </div>

          {justAdded && (
            <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>✓ Добавлено!</span>
              <button
                onClick={() => navigate('/cart')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  textDecoration: 'underline',
                  fontWeight: 500,
                }}
              >
                В корзину →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};