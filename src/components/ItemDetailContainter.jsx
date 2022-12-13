import React, { useEffect, useState } from "react";
import arrayProducts from "./Json/Products.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{
    
    const [item, setItem]= useState({});
    const {id}=useParams();
    useEffect(()=> {
        const promesa = new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(arrayProducts.find(item => item.id === parseInt(id)));
            },2000);
        });
    promesa.then((data) => {
        setItem(data);
        })
        
    }, [id]);
    return(
        <div className="container my-5">
            <ItemDetail item={item}/>
            
        </div>
    )
}
export default ItemDetailContainer;