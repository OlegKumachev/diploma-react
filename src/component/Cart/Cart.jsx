import React from 'react';
import { useCart } from '../../Context/CartContext';

export const Cart = () => {
    const { state: cartState, dispatch } = useCart();

    const handleRemoveItem = (id, size) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id, size } });
    };

    const handleUpdateQuantity = (id, size, quantity) => {
        dispatch({ type: 'UPDATE_ITEM_QUANTITY', payload: { id, size, quantity } });
    };

    const totalAmount = cartState.items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Корзина</h2>
            {cartState.items.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <div>
                    <ul>
                        {cartState.items.map(item => (
                            <li key={`${item.id}-${item.size}`}>
                                <p>{item.title} - Размер: {item.size}</p>
                                <p>Цена: {item.price} руб.</p>
                                <p>Количество: 
                                    <input 
                                        type="number" 
                                        value={item.quantity} 
                                        onChange={(e) => handleUpdateQuantity(item.id, item.size, parseInt(e.target.value))}
                                    />
                                </p>
                                <button onClick={() => handleRemoveItem(item.id, item.size)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                    <p>Общая сумма: {totalAmount.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
                    <button>Оформить заказ</button>
                </div>
            )}
        </div>
    );
};

