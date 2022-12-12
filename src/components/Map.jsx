import React from "react";

const Map = () => {
    const productos = [
        {id:1, name:"Chomba", description:"Chomba DCshoes", stock:10, price:3500, image:"../images/ChombaDC.jpg" },
        {id:2, name:"Cool", description:"Remera Cool", stock:4, price:4500, image:"../images/Cool.jpg" },
        {id:3, name:"Camperon", description:"Adidas Vintage", stock:2, price:5500, image:"../images/AdidasVintage.jpg" },
        {id:4, name:"Jogger", description:"Jogger OffWhite", stock:7, price:6500, image:"../images/OffWhite.jpg" },
        {id:5, name:"Buzo", description:"Buzo Reflex", stock:5, price:3500, image:"../images/Reflex.jpg" },
        {id:6, name:"Remera", description:"Remera Japonesa", stock:20, price:2500, image:"../images/Remera.jpg" }
    ];

    return (
        <div>
            <h1>Indumentaria</h1>
            <div className="row">
                {
                    productos.map(pord => (
                        <div className="col-md-3 mb-3" key={prod.id}>
                            <div className="card">
                                <img src={prod.image} className="card-img-top" alt={prod.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{prod.name}</h5>
                                    <p className="card-text">{prod.description}</p>
                                    <p><b>${prod.price}</b></p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
