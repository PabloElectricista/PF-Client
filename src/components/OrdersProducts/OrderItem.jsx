/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Store } from '../../Store'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function OrderItem({ product, order }) {

    const [summary, setSummary] = useState('')
    const [stock, setStock] = useState('')
    
    useEffect(()=> {
        axios(`/products/${product._id}`)
        .then(({ data })=> {
            setSummary(data.summary)
            setStock(data.stock)
        })
        .catch(error => console.error(error))
    }, [])

    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store)
    const { cart: { cartItems } } = state;
    const addToCartHandler = async (item) => {
        const existItem = cartItems.find((x) => x._id === product._id)
        const quantity = existItem ? existItem.quantity + 1 : 1;
        if (stock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity },
        });
    };

    return (
        <>
            <Row>
                <Col md={3} >
                    <Image src={product.images} width="150" className="m-2" />
                </Col>
                <Col md={5}>
                    <Card.Text>
                        Date: {order.createdAt.slice(0, 10)}
                    </Card.Text>
                    <Card.Text>
                        Summary: {summary}
                    </Card.Text>
                </Col>
                <Col md={3}>
                    <Button
                        type="button"
                        variant="outline-primary"
                        className="my-2"
                        style={{ fontWeight: "bolder" }}
                        onClick={() => navigate(`/admin/ordersdetails/${order._id}`)}
                    >
                        see order
                    </Button>
                    &nbsp;
                    <Button
                        type="button"
                        variant="outline-primary"
                        className="my-2"
                        style={{ fontWeight: "bolder" }}
                        onClick={() => addToCartHandler({_id:product._id, name:product.name, images:product.images, price:product.price })}
                    >
                        buy again
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default OrderItem;
