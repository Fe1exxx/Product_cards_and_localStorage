// src/DataSection.jsx
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const data = [
  { id: 1, phone: "Iphone", price: 120000 },
  { id: 2, phone: "Samsung", price: 110000 },
  { id: 3, phone: "Poco", price: 80000 },
  { id: 4, phone: "Realme", price: 40000 },
  { id: 5, phone: "Another", price: 0 },
  { id: 6, phone: "Another", price: 0 },
  { id: 7, phone: "Another", price: 0 },
  { id: 8, phone: "Another", price: 0 },
];

export default function DataSection() {
  // Читаем counts из localStorage при загрузке
  const [counts, setCounts] = useState(() => {
    const saved = localStorage.getItem("counts");
    try {
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Ошибка при чтении counts из localStorage", e);
      return {};
    }
  });

  // Сохраняем counts в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(counts));
  }, [counts]);

  const updateCount = (id, newCount) => {
    setCounts((prev) => ({
      ...prev,
      [id]: newCount,
    }));
  };

  // Сумма всех счётчиков
  const total = Object.values(counts).reduce((sum, c) => sum + c, 0);

  return (
    <div>
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          count={counts[product.id] || 0}
          onCountChange={(newCount) => updateCount(product.id, newCount)}
        />
      ))}
      <h1>dads</h1>
      <p>Всего: {total}</p>
    </div>
  );
}
