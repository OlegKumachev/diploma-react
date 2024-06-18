
import {  Route, Routes } from 'react-router-dom';
import { Header } from './component/Header/Header';
import { Footer } from './component/Footer/Footer';
import { HomePage } from './Pages/HomePage/HomePage';
import { AboutPage } from './Pages/about/AboutPage';
import Catalog from './Pages/Catalog/Catalog';
import { Contact } from './Pages/Contact/Contact';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { Banner } from './component/Banner/Banner';
import { Cart } from './component/Cart/Cart';
import { Product } from './Pages/Product/Product';
import { ContextProviders } from './Context/ContextProviders';
import './index.css'

const App = () => (
  <ContextProviders>
    <div>
      <Header />
      <Banner/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/contacts' element={<Contact/>} />
        <Route path='/404' element={<ErrorPage/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  </ContextProviders>

)

export default App