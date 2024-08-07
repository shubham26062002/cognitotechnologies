import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound'
import WhoWeAre from './Pages/WhoWeAre';
import WhatWeDo from './Pages/WhatWeDo';
import Contact from './Pages/Contact';
import Career from './Pages/Career';
import Product from './Pages/Product';
import Layout from './Components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index path="/" element={<Navigate to="/home"/>}/>
          <Route path="home" element={<Home />}/>
          <Route path="intro" element={<WhoWeAre />}/>
          <Route path="whatwedo" element={<WhatWeDo />}/>
          <Route path="products" element={<Product />}/>
          <Route path="career" element={<Career />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
