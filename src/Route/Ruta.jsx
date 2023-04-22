import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetails from "../Components/Routes/ProductDetails";

const Ruta = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/ProductDetails" element={<ProductDetails/>}/>
      </Routes>  
    </Router>
    
  )
}

export default Ruta