import { Link } from "react-router-dom";

export const Catalog = () => (
  <main className="container">
    <div className="row">
      <div className="col">
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск" />
          </form>
          <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
              <Link to="#" className="nav-link active">Все</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Женская обувь</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Мужская обувь</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Обувь унисекс</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Детская обувь</Link>
            </li>
          </ul>
          <div className="row">
            {/* Код для каждой карточки товара */}
          </div>
          <div className="text-center">
            <button className="btn btn-outline-primary">Загрузить ещё</button>
          </div>
        </section>
      </div>
    </div>
  </main>
);
