import React from "react";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="container bg-warning ">
            <div className="row">
                <div className="col-md-6">
                    <NavBar />
                </div>
            </div>
        </div>
    )
}

export default Header;