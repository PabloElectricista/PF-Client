/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { toast } from 'react-toastify';
import Card from "./Card";

function Cards() {

    const { products } = useSelector(state => state.products)
    const [row1, setRow1] = useState([])
    const [row2, setRow2] = useState([])
    const [row3, setRow3] = useState([])

    useEffect(() => {
        if (products && products.length > 0) {
            setRow1(products.slice(0, 3))
            setRow2(products.slice(3, 6))
            setRow3(products.slice(6, 9))
        }
    }, [products])

    const getCards = (prods) => {
        return prods.map(product => <div className="d-flex flex-row mb-1">
            <div className="p-2 mb-3">
                <Card
                    _id={product._id}
                    image={product.images[0]}
                    name={product.name}
                    price={product.price}
                    brand={product.brand}
                />
            </div>
        </div>)
    }

    return <div className="container align-items-end  mt-3">
        {products && products.length > 0 ?
            (
                <div className="d-flex flex-row mb-1">{
                    getCards

                }</div>
            ) :
            <span>Loading ...</span>
        }
    </div>
}

export default Cards;