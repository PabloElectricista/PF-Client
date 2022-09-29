import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from "react-bootstrap";

function OrderSelected({products, id}) {

    const [selProds, setSelProds] = useState([])


    useEffect(()=>{
        if (products && products.length > 0) {
            for (const product of products) {
                axios("/products/" + product.product)
                .then(({data}) => console.log(data.product))
                .catch(error => console.log(error))
                // console.log(product.product);
            }
        }
    }, [products])

    return <>
        <Card>
            <Card.Title>{id}</Card.Title>
        </Card>
    </>
}

export default OrderSelected;