import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Loader = () => (
  <div className="preloader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export const TopSales = () => {
    const [topSales, setTopSales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopSales = async () => {
            try {
                const response = await fetch('http://localhost:7070/api/top-sales');
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                const data = await response.json();
                setTopSales(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTopSales();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (topSales.length === 0) {
        return null;
    }

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
                {topSales.map((product) => (
                    <div className="col-4" key={product.id}>
                        <div className="card">
                            <img 
                                src={product.images[0]} 
                                className="card-img-top img-fluid" 
                                alt={product.title}
                            />
                            <div className="card-body">
                                <p className="card-text">{product.title}</p>
                                <p className="card-text">{product.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
                                <Link to={`/products/${product.id}`} className="btn btn-outline-primary">
                                    Заказать
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
