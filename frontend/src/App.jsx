import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import ElectronicsList from './pages/ElectronicsList';
import ElectronicsProduct from './pages/ElectronicsProduct';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer /> {/* Container for displaying toast notifications */}
      <Navbar /> {/* Navbar component */}
      <SearchBar /> {/* SearchBar component */}
      <Routes>
        <Route path='/' element={<Home />} /> {/* Home page route */}
        <Route path='/collection' element={<Collection />} /> {/* Collection page route */}
        <Route path='/about' element={<About />} /> {/* About page route */}
        <Route path='/contact' element={<Contact />} /> {/* Contact page route */}
        <Route path='/product/:productId' element={<Product />} /> {/* Product page route */}
        <Route path="/electronicsproduct/:productId" element={<ElectronicsProduct />} /> {/* ElectronicsProduct page route */}
        <Route path='/cart' element={<Cart />} /> {/* Cart page route */}
        <Route path='/login' element={<Login />} /> {/* Login page route */}
        <Route path='/place-order' element={<PlaceOrder />} /> {/* PlaceOrder page route */}
        <Route path='/orders' element={<Orders />} /> {/* Orders page route */}
        <Route path='/verify' element={<Verify />} /> {/* Verify page route */}
        <Route path='/electronicslist' element={<ElectronicsList />} /> {/* ElectronicsList page route */}
        <Route path='/privacy-policy' element={<PrivacyPolicy />} /> {/* PrivacyPolicy page route */}
      </Routes>
      <Footer /> {/* Footer component */}
    </div>
  )
}

export default App // Exporting App component
