import react from "react";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Products from "./components/Products";


function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting={"¡Bienvenidos a StreetWear!"} />
      <Products />
      <Banners />
      <Footer />
    </div>
  );
}

export default App;
