import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Header from './Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


   <>
      <BrowserRouter>
                       <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>
   </>

);



