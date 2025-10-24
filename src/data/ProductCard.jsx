// ProductCard.jsx
export default function ProductCard({ product, count, onCountChange }) {
  const increment = () => onCountChange(count + 1);
  const decrement = () => onCountChange(Math.max(0, count - 1));

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>Телефон: {product.phone}</h3>
      <p>Цена: {product.price} рублей</p>
      <button onClick={decrement}>Убавить</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={increment}>Добавить</button>
    </div>
  );
}
