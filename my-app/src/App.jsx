import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Stats from './components/stats'
import Get_started from './components/Get_started'
import Pricing from './components/Pricing'
import Transform from './components/Transform'
import Footer from './components/Footer'
import DigiTools from './components/DigiTools'

import { Toaster } from 'react-hot-toast';

import { useState } from 'react'
function App() {

  const [carts, setCarts] = useState([]);

  return (
    <>
<Toaster/>
      <NavBar carts={carts}></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <DigiTools carts={carts} setCarts={setCarts}></DigiTools>

      <Get_started></Get_started>

      <Pricing></Pricing>

      <Transform></Transform>

      <Footer></Footer>
      
    </>
  )
}

export default App
