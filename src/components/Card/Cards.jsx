/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProds } from "../../redux/actions/products";
import { toast } from 'react-toastify';

function Cards() {

    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)

    useEffect(()=>{
        dispatch(getProds())
        toast(" Vamos equipo!! ", {
            type: 'info'
        })
    }, [])

    return <div>
        {products && products.length ? products.map(product => <>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Categories: </p>
        {product.category.map(cat => <p>{cat}</p>)}
        </>) : "products"}
    </div>
}

export default Cards;