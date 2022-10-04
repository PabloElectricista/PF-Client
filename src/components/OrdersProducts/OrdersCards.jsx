import OrderItem from './OrderItem'
import { ListGroup, Card } from 'react-bootstrap'

function OrdersCards({ date, orders }) {
    console.log(orders);
    return <div className='container my-3' >
        <Card border="primary" >
            <Card.Subtitle className="my-3 text-center text-danger">{date}</Card.Subtitle>
            <ListGroup>
            {orders && orders.length > 0 ? orders.map(order =>
                order.orderItems.map((product, idx) => <ListGroup.Item key={idx} >
                    <OrderItem product={product} />
                </ListGroup.Item>
                )) : null}
            </ListGroup>
        </Card>
    </div>
}

export default OrdersCards;
