import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { useCatalog } from '../../Context/CatalogContext';

const Catalog = () => {
  const { catalogs, loading, error } = useCatalog();
  const { dispatch } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');

  if (!catalogs) return null;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: { id: product.id, quantity: 1 } });
  };

  const filteredProducts = catalogs.filter((product) => {
    const matchesCategory = activeCategory === 'Все' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
              {['Все', 'Женская обувь', 'Мужская обувь', 'Обувь унисекс', 'Детская обувь'].map(category => (
                <li className="nav-item" key={category}>
                  <button 
                    className={`nav-link ${category === activeCategory ? 'active' : ''}`} 
                    onClick={() => handleCategoryChange(category)}
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
                      {/* Используем Link для перехода на страницу продукта */}
                      <Link to={`/products/${product.id}`} className="btn btn-outline-primary">
                        Заказать
                      </Link>
                      <button 
                        className="btn btn-outline-secondary" 
                        onClick={() => addToCart(product)}
                      >
                        Добавить в корзину
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
