// import axios from 'axios'
// import { useState } from 'react';
// import { useEffect } from 'react';
import { Card, Col, Image } from "react-bootstrap";

function OrderSelected({ order }) {

    return <div className="container me-3 mt-3 p-3">
        <Card >
            {order && order.orderItems.length > 0 ?
                <>
                    <Card.Title className="m-2 text-danger text-center">Order selected</Card.Title>
                    {order.orderItems.map(product => <Card.Body className="text-center mx-auto">
                        <Image
                            src={product.images[0]}
                            alt="product"
                            width="150"
                            className="mx-auto"
                        />
                        <Card.Text className="text-primary text-center">{product.name}</Card.Text>
                        <Card.Text className="fw-bold text-success text-center">{product.quantity}</Card.Text>
                    </Card.Body>)}
                </>
                : <h5 className="m-2 p-2 text-success text-warning" style={{ width: "600px" }}>
                    No order selected
                </h5>}
        </Card>
    </div>
}

export default OrderSelected;