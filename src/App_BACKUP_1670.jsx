import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";

import product1 from "./assets/Carousel-img/uno.jpg";
import product2 from "./assets/Carousel-img/dos.jpg";
import product3 from "./assets/Carousel-img/tres.jpg";
import product4 from "./assets/Carousel-img/cuatro.jpg";
import product5 from "./assets/Carousel-img/cinco.jpg";
import Ruta from "./Route/Ruta";

const slides = [
  { id: 1, productImage: product1 },
  { id: 2, productImage: product2 },
  { id: 3, productImage: product3 },
  { id: 4, productImage: product4 },
  { id: 5, productImage: product5 },
];

const App = () => {
<<<<<<< HEAD
  return ( 
  <>
  <Carousel slides={slides}/>
  <Ruta />
  <Footer />
  </>

  )
=======
  return (
    <div className="overflow-hidden max-sm">
      <Router>
        <Carousel slides={slides} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
>>>>>>> 5128424c1422eebf00153072dca13e7c9eb7b018
};

export default App;