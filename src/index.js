import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Service from './component/Service'
import Footer from './component/Footer';
import Footerend from './component/Footerend';
import Shop from './Shop-page/Shop';
import Contact from './Contact Page/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <>
      <BrowserRouter>
                       <Header />
         <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/shop" element={<Shop/>} /> 
           <Route path="/contact" element={<Contact/>} /> 
           
         </Routes>
         <Service/>
         <Footer/>
         <Footerend/>
      </BrowserRouter>
   </>

);



