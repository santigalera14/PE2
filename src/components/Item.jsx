import React from "react";
import { Link } from "react-router-dom";


const Item = ({ item }) => {
    return (
        <div className="col-md-3 text-center border-0">
            <Link to={"/Item/" + item.id} className="text-decoration-none text-dark">
                <div className="card" >
                    <img src={item.image} className="card-img-top mt-5 img-fluid" alt={item.name} />
                    <div className="card-body ">
                        <p className="card-text">{item.name} </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Item;