import { Link } from "react-router-dom";

export const MainPage = () => (
    <main className="container">
    <div className="row">
      <div className="col">
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <img src="./img/products/sandals_myer.jpg"
                  className="card-img-top img-fluid" alt="Босоножки 'MYER'"/>
                <div className="card-body">
                  <p className="card-text">Босоножки 'MYER'</p>
                  <p className="card-text">34 000 руб.</p>
                  <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src=".assets/img/products/sandals_keira.jpg"
                  className="card-img-top img-fluid" alt="Босоножки 'Keira'"/>
                <div className="card-body">
                  <p className="card-text">Босоножки 'Keira'</p>
                  <p className="card-text">7 600 руб.</p>
                  <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src="./img/products/superhero_sneakers.jpg"
                  className="card-img-top img-fluid" alt="Супергеройские кеды"/>
                <div className="card-body">
                  <p className="card-text">Супергеройские кеды</p>
                  <p className="card-text">1 400 руб.</p>
                  <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
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
                <img src="./img/products/sandals_myer.jpg"
                  className="card-img-top img-fluid" alt="Босоножки 'MYER'"/>
                <div className="card-body">
                  <p className="card-text">Босоножки 'MYER'</p>
                  <p className="card-text">34 000 руб.</p>
                  <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card catalog-item-card">
                <img src="./img/products/sandals_keira.jpg"
                  className="card-img-top img-fluid" alt="Босоножки 'Keira'"/>
                <div className="card-body">
                  <p className="card-text">Босоножки 'Keira'</p>
                  <p className="card-text">7 600 руб.</p>
                  <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div claclassNamess="card catalog-item-card">
                <img src="./img/products/superhero_sneakers.jpg"
                  className="card-img-top img-fluid" alt="Супергеройские кеды"/>
                <div className="card-body">
                  <p className="card-text">Супергеройские кеды</p>
                  <p className="card-text">1 400 руб.</p>
                  <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card catalog-item-card">
                <img src="./img/products/sandals_myer.jpg"
                  className="card-img-top img-fluid" alt="Босоножки 'MYER'"/>
                <div className="card-body">
                  <p className="card-text">Босоножки 'MYER'</p>
                  <p className="card-text">34 000 руб.</p>
                  <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card catalog-item-card">
                <img src="./img/products/sandals_keira.jpg"
                  className="card-img-top img-fluid" alt="Босоножки 'Keira'"/>
                <div className="card-body">
                  <p className="card-text">Босоножки 'Keira'</p>
                  <p className="card-text">7 600 руб.</p>
                  <Link to="/products/1.html" className="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card catalog-item-card">
                <img src="./img/products/superhero_sneakers.jpg"
                  className="card-img-top img-fluid" alt="Супергеройские кеды"/>
                <div className="card-body">
                  <p className="card-text">Супергеройские кеды</p>
                  <p className="card-text">1 400 руб.</p>
                  <Link to="/products/1.html" class="btn btn-outline-primary">Заказать</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-outline-primary">Загрузить ещё</button>
          </div>
        </section>
      </div>
    </div>
  </main>
)