export const Categories = () => (
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
    
)