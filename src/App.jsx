import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Loader from "./components/Loader";
import ItemDetailContainer from "./components/ItemDetailContainter";



function App() {
  return (
    <div className="bg-dark">
      <BrowserRouter>
      <Loader />
        <Header />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App; 
