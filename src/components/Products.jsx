import React from "react";

const Input = ({placeholder}) => {
    return (
        <input type="text" class="form-control" placeholder={placeholder} />
    )
}

const Products = () => {
    const ropa = [
        {id:1, nombre:"Pantalon StreetWear", precio:7000},
        {id:2, nombre:"Buzo KOTK", precio:9000},
        {id:3, nombre:"Remera COOL", precio:5000},
    ]; 
    return (
        <div>
            <ul>
                {
                    ropa.map(item => {
                        <li key={item.id}>{item.nombre} - ${item.precio}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Products;