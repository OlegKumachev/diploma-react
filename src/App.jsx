import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Header } from './component/Header/Header';
import { Footer } from './component/Footer/Footer';
import { HomePage } from './Pages/HomePage/HomePage';
import { AboutPage } from './Pages/about/AboutPage';
import { MainPage } from './Pages/MainPage/MainPage';
import Catalog from './Pages/Catalog/Catalog';
import { Contact } from './Pages/Contact/Contact';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { Banner } from './component/Banner/Banner';
import  Card  from './Pages/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import { ProductProvider } from './Context/ProductContext';
import './index.css'



const App = () => (
  <ProductProvider>
    <CartProvider>
  <div>
    <Header />
    <Banner/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/index' element={<MainPage/>} />
      <Route path='/catalog' element={<Catalog/>} />
      <Route path='/contacts' element={<Contact/>} />
      <Route path='/404' element={<ErrorPage/>} />
      <Route path='/cart' element={<Card/>}/>
    </Routes>
  <Footer />
  </div>
  </CartProvider>
</ProductProvider>

)

export default App
