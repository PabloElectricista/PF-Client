/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import OrdersList from "./OrdersList"
import { getOrdersUser } from '../../redux/actions/orders'
import { useEffect } from "react";
import { Col, Image, Row } from 'react-bootstrap';
import ordenes from '../../views/assets/ordenes.jpg'

function OrdersProducts() {

    const dispatch = useDispatch()
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        dispatch(getOrdersUser(user._id))
    }, [])

    return (
        <div>
            <br></br><br></br><br></br>
            <div className="container" style={{ backgroundColor: "white" }}>
                <Row>
                    <Col md={8}>
                        <OrdersList/>
                    </Col>
                    <Col>
                        <Image className='mt-3' src={ordenes} width="300px" />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default OrdersProducts;
