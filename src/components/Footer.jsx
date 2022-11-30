import React from "react";

const Footer = () => {
    return (
        <div className="containter">
            <div className="row">
                <div className="col-md-6 d-flex aling-items-center justify-content-center">
                    <a href="#" className="mx-1">FB</a>
                    <a href="#" className="mx-1">TW</a>
                    <a href="#" className="mx-1">IG</a>
                    <a href="#" className="mx-1">GM</a>
                </div>
                <div className="col-md-6 d-flex aling-items-center justify-content-end">
                    <a href="#" target="_blank" className="btn btn-success">Contacto</a>
                    <a href="#" target="_blank" className="btn btn-success">Nosotros</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;