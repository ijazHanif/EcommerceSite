import React from 'react';
import { Routes, Route } from 'react-router-dom';
  import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';

export default function App() {
  return (
    <>
     <div>
         <Header/>
       <Routes>
          <Route path='/' element={<ProductListing/>}/>
          <Route path='/ProductComponent' element={<ProductComponent/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
       </Routes>
     </div>
    </>
)}
