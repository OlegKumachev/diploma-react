import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';

const OrderForm = () => {
    const { state: cartState, dispatch } = useCart();
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [agreement, setAgreement] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!agreement) {
            alert("Необходимо согласиться с правилами доставки");
            return;
        }
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
                setAgreement(false);
                localStorage.removeItem('cart');
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
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        placeholder="Ваш телефон"
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        placeholder="Адрес доставки"
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="agreement" 
                        checked={agreement}
                        onChange={(e) => setAgreement(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                </div>
                <button type="submit" className="btn btn-outline-secondary" disabled={isSubmitting}>
                    {isSubmitting ? 'Оформление...' : 'Оформить'}
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
