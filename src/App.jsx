
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Loader />
        <Header />
        <Routes>
          <Route path={"/products"} element={<Products />} />
            
        </Routes>
        <ItemListContainer greeting={"¡Bienvenidos a StreetWear!"} />
        <Products />
        <Banners />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App; 
