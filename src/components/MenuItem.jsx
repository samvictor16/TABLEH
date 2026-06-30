export default function MenuItem({ item, onAddToCart }) {
  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  return (
    <article className="menu-item">
      <div className="item-image">{item.image}</div>
      <div className="item-info">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-footer">
          <span className="item-price">{formatPrice(item.price)}</span>
          <button 
            className="add-button"
            onClick={() => onAddToCart(item)}
          >
            + Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
