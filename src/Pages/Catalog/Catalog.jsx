import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { useCatalogItems } from '../../Context/CatalogContext';
import { useCatalogCategories } from '../../Context/CatalogCategoriesContext';

const Loader = () => (
    <div className="preloader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
  

const Catalog = () => {
    const { categories, loading: categoriesLoading } = useCatalogCategories();
    const { items: catalogs, loading: itemsLoading, fetchItems, setCategory } = useCatalogItems();
    const { dispatch } = useCart();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState({ id: null, title: 'Все' });
    const [offset, setOffset] = useState(0);

    useEffect(() => {
    }, [categories]);

    if (categoriesLoading || itemsLoading) return <p>{Loader()}</p>;
    if (!categories || !catalogs) return <p>Данные не загружены</p>;

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCategory(category);
        setOffset(0);
        fetchItems(0);
    };


    const filteredProducts = catalogs.filter((product) => {
        const matchesCategory = !activeCategory.id || product.category === activeCategory.id;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        <form className="catalog-search-form form-inline">
                            <input 
                                className="form-control" 
                                placeholder="Поиск" 
                                value={searchQuery} 
                                onChange={handleSearchChange} 
                            />
                        </form>
                        <ul className="catalog-categories nav justify-content-center">
                            {['Все', ...categories.map(cat => cat.title)].map((category, index) => (
                                <li className="nav-item" key={index}>
                                    <button 
                                        className={`nav-link ${category === activeCategory.title ? 'active' : ''}`} 
                                        onClick={() => handleCategoryChange(category === 'Все' ? { id: null, title: 'Все' } : categories.find(cat => cat.title === category))}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="row">
                            {filteredProducts.map((product) => (
                                <div className="col-4" key={product.id}>
                                    <div className="card catalog-item-card">
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
                        <div className="text-center">
                            <button 
                                className="btn btn-outline-primary" 
                                onClick={() => {
                                    const newOffset = offset + 6;
                                    setOffset(newOffset);
                                    fetchItems(newOffset);
                                }}
                            >
                                Загрузить ещё
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Catalog;
