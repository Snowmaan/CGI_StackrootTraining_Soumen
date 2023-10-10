import React from 'react';
import './styles.css'
import { BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from './Components/Home.js'; 
import './Components/Home.css';
import Products from './Components/Product';
import ContactUs from './Components/Contact';
import PageNotFound from './Components/PNotFound.js';
import './Components/PageNotFound.css'; 

const App = () => {
  return(
    <Router>
      <nav>
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/products"><h2>Products</h2></Link>
            <Link to="/contact"><h2>ContactUs</h2></Link>
      </nav>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App