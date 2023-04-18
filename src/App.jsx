import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";

import product1 from "./assets/Carousel-img/uno.jpg";
import product2 from "./assets/Carousel-img/dos.jpg";
import product3 from "./assets/Carousel-img/tres.jpg";
import product4 from "./assets/Carousel-img/cuatro.jpg";
import product5 from "./assets/Carousel-img/cinco.jpg";



const slides = [
  {id: 1, productImage: product1},
  {id: 2, productImage: product2},
  {id: 3, productImage: product3},
  {id: 4, productImage: product4,},
  {id: 5, productImage: product5,},
];


const App = () => {
  return ( 
  <>
  <Carousel slides={slides}/>
  <Footer />
  </>

  )
};

export default App;
