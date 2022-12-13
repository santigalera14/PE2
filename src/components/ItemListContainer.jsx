import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProducts from "./Json/Products.json";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {id}= useParams([]);
  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id ? arrayProducts.filter (item => item.type === id ): arrayProducts);
      }, 2000);
    });
    promise.then((data) => {
      setItems(data);
    });
  },[id] );

  return (
    <div className="container">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;