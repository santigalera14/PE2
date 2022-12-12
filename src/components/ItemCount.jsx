import React, { useState } from "react";


const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(1);
    const oneMore = () => {

        if (counter < stock) {
            setCounter(counter + 1);
        }
    }
    const oneLess = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }
    const onAdd = () => {
        if (counter > 0) {
            console.log("Agregaste " + counter + " al carrito!!!")
        } if (counter <= 0) {
            console.log("El campo de producto no puede ser 0")
        }
    }
    return (
        <div>
            <div className="row mb-2">
                <div className="col-md-5 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={oneLess}  >-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={oneMore}  >+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 text-center">
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>

        </div>
    )
}
export default ItemCount;
