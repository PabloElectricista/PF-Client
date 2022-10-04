import OrderItem from './OrderItem'
import Card from 'react-bootstrap/Card';

function OrdersCards({ date, order, products }) {
    console.log(products);
    return <div>
        <Card border="primary" className='m-3'>
            <Card.Subtitle className="m-2 ">{date}</Card.Subtitle>

            <OrderItem product={products} order={order} />
s
        </Card>
    </div>
}

export default OrdersCards;