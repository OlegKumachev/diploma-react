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
            <Link className="nav-link active" to="#">Все</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Женская обувь</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Мужская обувь</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Обувь унисекс</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Детская обувь</Link>
          </li>
        </ul>
        <div className="row">
          <div className="col-4">
            <div className="card catalog-item-card">
              <img src="./src/img/products/sandals_myer.jpg" className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
              <div className="card-body">
                <p className="card-text">Босоножки 'MYER'</p>
                <p className="card-text">34 000 руб.</p>
                <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
              </div>
            </div>
          </div>
          {/* Другие элементы <div class="col-4"> ... </div> */}
        </div>
        <div className="text-center">
          <button className="btn btn-outline-primary">Загрузить ещё</button>
        </div>
      </section>
    </div>
  </div>
</main>
  );
  