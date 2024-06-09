import { useParams } from 'react-router-dom';
import { useProducts } from '../../Context/ProductContext';
import { useEffect } from 'react'

export const Product = () => {
    const { product, loading, error } = useProducts();
   
    // Проверяем, загрузились ли данные или произошла ошибка
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Проверяем, что данные о продукте загружены
    if (!product) {
        return <div>No product available</div>;
    }

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
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                        <button className="btn btn-secondary">-</button>
                                        <span className="btn btn-outline-primary">1</span>
                                        <button className="btn btn-secondary">+</button>
                                    </span>
                                    </p>
                                </div>
                                <button className="btn btn-danger btn-block btn-lg">В корзину</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};
