import React from 'react';
import { useCart } from '../../Context/CartContext';
import  OrderForm  from './OrderForm';

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
        <main className="container">
            <div className="row">
                <div className="col">
                    <section className="cart">
                        <h2 className="text-center">Корзина</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Название</th>
                                    <th scope="col">Размер</th>
                                    <th scope="col">Кол-во</th>
                                    <th scope="col">Стоимость</th>
                                    <th scope="col">Итого</th>
                                    <th scope="col">Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartState.items.map((item, index) => (
                                    <tr key={index}>
                                        <td scope="row">{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.size}</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) => handleUpdateQuantity(item.id, item.size, parseInt(e.target.value))}
                                                className="form-control"
                                                min="1"
                                            />
                                        </td>
                                        <td>{item.price} руб.</td>
                                        <td>{item.price * item.quantity} руб.</td>
                                        <td>
                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() => handleRemoveItem(item.id, item.size)}
                                            >
                                                Удалить
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="5" className="text-right">Общая стоимость</td>
                                    <td>{totalAmount} руб.</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="order">
                        <h2 className="text-center">Оформить заказ</h2>
                            <OrderForm/>
                    </section>
                </div>
            </div>
        </main>
    );
};

