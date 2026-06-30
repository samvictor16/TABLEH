export default function Cart({ items, onClose, onUpdateQuantity, onRemove }) {
  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Seu Pedido</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="empty-icon">🍽️</span>
            <p>Seu carrinho está vazio</p>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <span className="cart-item-emoji">{item.image}</span>
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                  <div className="quantity-controls">
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    🗑️
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <button className="checkout-btn">
                Finalizar Pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
