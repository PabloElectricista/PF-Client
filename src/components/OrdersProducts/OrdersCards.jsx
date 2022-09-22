import OrderItem from './OrderItem'
import Card from 'react-bootstrap/Card';

function OrdersCards({ order }) {

    return <div>
        <Card border="primary" className='m-3'>
            <Card.Subtitle className="m-2 ">{order.createdAt.slice(0, 10)}</Card.Subtitle>

            <OrderItem product={order} updatedAt={order.updatedAt} listname="completed" />

        </Card>
    </div>
}

export default OrdersCards;