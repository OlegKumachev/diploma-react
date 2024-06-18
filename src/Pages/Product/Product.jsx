import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../../Context/ProductContext';
import { useCart } from '../../Context/CartContext';
import { useEffect, useState } from 'react';

export const Product = () => {
    const { product, loading, error } = useProducts();
    const { dispatch, state: cartState } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null); // State to track selected size

    // Проверяем, загрузились ли данные или произошла ошибка
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>No product available</div>;
    }

    const handleAddToCart = () => {
        const existingItem = cartState.items.find(
            item => item.id === product.id && item.size === selectedSize
        );
        if (existingItem) {
            dispatch({
                type: 'UPDATE_ITEM_QUANTITY',
                payload: { id: product.id, size: selectedSize, quantity: existingItem.quantity + quantity }
            });
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity, size: selectedSize } });
        }
        // Redirect to cart page after adding to cart
        window.location.href = "/cart";
    };

    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <section className="catalog-item">
                        <h2 className="text-center">{product.title}</h2>
                        <div className="row">
                            <div className="col-5">
                                <img src={product.images[0]} className="img-fluid" alt={product.title} />
                            </div>
                            <div className="col-7">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Артикул</td>
                                            <td>{product.sku}</td>
                                        </tr>
                                        <tr>
                                            <td>Производитель</td>
                                            <td>{product.manufacturer}</td>
                                        </tr>
                                        <tr>
                                            <td>Цвет</td>
                                            <td>{product.color}</td>
                                        </tr>
                                        <tr>
                                            <td>Материалы</td>
                                            <td>{product.material}</td>
                                        </tr>
                                        <tr>
                                            <td>Сезон</td>
                                            <td>{product.season}</td>
                                        </tr>
                                        <tr>
                                            <td>Повод</td>
                                            <td>{product.reason}</td>
                                        </tr>
                                        <tr>
                                            <td>Размеры</td>
                                            <td>
                                                {product.sizes.filter(sizeObj => sizeObj.available).map((sizeObj, index) => (
                                                    <div key={index}>
                                                        <button
                                                            className={`btn ${selectedSize === sizeObj.size ? 'btn-primary' : 'btn-secondary'}`}
                                                            onClick={() => setSelectedSize(sizeObj.size)}
                                                        >
                                                            {sizeObj.size}
                                                        </button>
                                                    </div>
                                                ))}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                        <button className="btn btn-secondary" onClick={() => setQuantity(Math.max(quantity - 1, 1))}>-</button>
                                        <span className="btn btn-outline-primary">{quantity}</span>
                                        <button className="btn btn-secondary" onClick={() => setQuantity(quantity + 1)}>+</button>
                                    </span></p>
                                </div>
                                <button 
                                    className="btn btn-danger btn-block btn-lg"
                                    onClick={handleAddToCart}
                                    disabled={!selectedSize} // Disable button if no size is selected
                                >
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};
