import React from "react";

const Banners = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center shadow-sm p-3 mb-5 bg-body rounded">
                    <p><img src="images/chombas.jpg" alt="Promo chombas" className="img-fluid"/></p>
                    <h4>¡ Promo dos chombas por el precio de una !!</h4>
                    <p><a href="#" target="_blank" className="btn btn-warning">Comprar</a></p>
                </div>
                <div className="col-md-6 text-center shadow-sm p-3 mb-5 bg-body rounded">
                <p><img src="images/Billeteras.jpg" alt="Billeteras" className="img-fluid" /></p>
                    <h4>¡ Llevate una billetera streetwear !!</h4>
                    <p><a href="#" target="_blank" className="btn btn-warning">Ver mas</a></p>
                </div>
            </div>
        </div>
    )
}

export default Banners;