import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';

const OrderForm = () => {
    const { state: cartState, dispatch } = useCart();
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const orderData = {
            owner: {
                phone,
                address
            },
            items: cartState.items.map(item => ({
                id: item.id,
                price: item.price,
                count: item.quantity
            }))
        };

        try {
            const response = await fetch('http://localhost:7070/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            if (response.ok) {
                setSuccessMessage('Заказ успешно оформлен!');
                dispatch({ type: 'CLEAR_CART' });
                setPhone('');
                setAddress('');
            } else {
                console.error('Ошибка при оформлении заказа:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при оформлении заказа:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h2>Оформление заказа</h2>
            {successMessage && <p>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Телефон</label>
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Адрес</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Оформление...' : 'Оформить заказ'}
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
