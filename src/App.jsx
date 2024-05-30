import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom';
import { Header } from './component/Header/Header';
import { Footer } from './component/Footer/Footer';
import { HomePage } from './Pages/HomePage/HomePage';
import { AboutPage } from './Pages/about/AboutPage';
import { MainPage } from './Pages/MainPage/MainPage';
import { Catalog } from './Pages/Catalog/Catalog';
import { Contact } from './Pages/Contact/Contact';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { Banner } from './component/Banner/Banner';
import './index.css'



const App = () => (
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
    </Routes>
  <Footer />
  </div>

)

export default App
