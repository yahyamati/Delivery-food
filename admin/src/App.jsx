import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes , Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "https://delivery-food-backend.onrender.com"; // Adjust this to your backend URL
  return (
    <div>
    <ToastContainer />
    <Navbar />
    <hr />
    <div className="app-content">
      <Sidebar />
      <Routes>
        <Route path="/add" element={<Add url={url} />} />
        <Route path="/List" element={<List url={url} />} />
        <Route path="/Order" element={<Order url={url} />} />
      </Routes>
    </div>



    </div>
  )
}

export default App