// import axios from 'axios'
// import { useState } from 'react';
// import { useEffect } from 'react';
import { Button, Card, Image } from "react-bootstrap";

function OrderSelected({ order, changestatus }) {

    return <>
        <Card className="p-2">
            {order && order.orderItems.length > 0 ?
                <>
                    <Card.Title className="mx-auto">Order selected</Card.Title>
                    {order.orderItems.map(product => <Card.Body className="text-center my-3">
                        <Image
                            src={product.images[0]}
                            alt="product"
                            width="200"
                        />
                        <Card.Text>{product.name}</Card.Text>
                        <Card.Text>{product.quantity}</Card.Text>
                    </Card.Body>)}
                    {order.status === "pending" && (<div className="mx-auto text-center">
                        <Card.Text>change status</Card.Text>
                        <Button
                            size="sm"
                            className="mx-3"
                            variant="outline-primary"
                        >
                            completed
                        </Button>
                        <Button
                            size="sm"
                            className="mx-3"
                            variant="outline-primary"
                        >
                            canceled
                        </Button>
                    </div>)}
                </>
                : <Card.Text>No order selected</Card.Text>}
        </Card>
    </>
}

export default OrderSelected;