// import axios from 'axios'
// import { useState } from 'react';
// import { useEffect } from 'react';
import { Button, Card, Image } from "react-bootstrap";

function OrderSelected({ order, changestatus }) {

    return <>
        <Card className="m-3 p-3">
            {order && order.orderItems.length > 0 ?
                <>
                    <Card.Title className="px-2 mx-auto">Order selected</Card.Title>
                    {order.orderItems.map(product => <Card.Body className="text-center mx-auto">
                        <Image
                            src={product.images[0]}
                            alt="product"
                            width="150"
                            className="mx-auto"
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
                            onClick={() => changestatus(order._id, "completed")}
                        >
                            completed
                        </Button>
                        <Button
                            size="sm"
                            className="mx-3"
                            variant="outline-primary"
                            onClick={() => changestatus(order._id, "canceled")}
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