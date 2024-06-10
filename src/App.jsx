
import {  Route, Routes } from 'react-router-dom';
import { Header } from './component/Header/Header';
import { Footer } from './component/Footer/Footer';
import { HomePage } from './Pages/HomePage/HomePage';
import { AboutPage } from './Pages/about/AboutPage';
import Catalog from './Pages/Catalog/Catalog';
import { Contact } from './Pages/Contact/Contact';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { Banner } from './component/Banner/Banner';
import  Card  from './Pages/Cart/Cart';
import { CartProvider, } from './Context/CartContext';
import { Product } from './Pages/Product/Product';
import { CatalogCategoriesProvider } from './Context/CatalogCategoriesContext';
import { CatalogItemsProvider } from './Context/CatalogContext';
import { ProductProvider } from './Context/ProductContext';
import './index.css'

const App = () => (
  <CatalogCategoriesProvider>
    <CatalogItemsProvider>
    <CartProvider>
    <div>
      <Header /> {/*header надо будет перенесть в компанетты */}
      <Banner/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/contacts' element={<Contact/>} />
        <Route path='/404' element={<ErrorPage/>} />
        <Route path='/cart' element={<Card/>}/>
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
    </CartProvider>
    </CatalogItemsProvider>
  </CatalogCategoriesProvider>

)

export default App
