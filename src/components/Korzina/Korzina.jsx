import React from 'react';
import { useCart } from '../CartConte/CartContext';


export function Cart() {
  const { cart, getTotalPrice } = useCart();

  return (
    <div>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.quantity} шт. - {item.price * item.quantity}₽
              </li>
            ))}
          </ul>
          <h3>Итого: {getTotalPrice()}₽</h3>
        </>
      )}
    </div>
  );
}