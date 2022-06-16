import React from 'react'
import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from './pages/home/Home.jsx'
import Cart from './pages/carts/Carts.jsx'



export default function App(props) {

  return (
    <>
      <CartProvider>
        <Home/>
        <Cart/>
      </CartProvider>
    </>
  )
}
