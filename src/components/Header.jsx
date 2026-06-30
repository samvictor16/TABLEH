export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🍴</span>
          <h1>Table-Hub</h1>
        </div>
        <button className="cart-button" onClick={onCartClick}>
          🛒 Carrinho
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
