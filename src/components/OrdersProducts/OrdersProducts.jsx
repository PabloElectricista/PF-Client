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
            <div className="container mt-5 px-3 w-100" style={{ backgroundColor: "white", minWidth: "800px" }}>
                <Row>
                    <Col md={7}>
                        <OrdersList/>
                    </Col>
                    <Col md={3}>
                        <Image className='mt-3 p-2' src={ordenes} width="300"/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default OrdersProducts;
