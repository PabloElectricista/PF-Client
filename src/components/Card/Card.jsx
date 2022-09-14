/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import React from "react";
// import './Card.css'

function Card({image, name, _id, price, brand}) {

    return <div className="card-container">
        <div className="card" style={{width: "5rem;"}} key={_id}>
            <img src="https://via.placeholder.com/40/2299ff" className="card-img-top p-2" alt="product"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${brand}</p>
                    <p className="card-text">${price}</p>
                    <NavLink to={`productsdetails/${_id}`} className="btn btn-primary">See details</NavLink>
                </div>
        </div>
    </div>
}

export default Card;