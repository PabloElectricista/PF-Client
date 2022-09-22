import { Col, Image, Row } from 'react-bootstrap';
import OrdersCards from './OrdersCards'
import ordenes from '../../views/assets/ordenes.jpg'

function OrdersList({ orders }) {
    return <div>
        <Row>
            <Col md={8}>
                {orders && orders.map(order => <OrdersCards order={order} />)}
            </Col>
            <Col>
                <Image  className='mt-3' src={ordenes} width="300px"/>
            </Col>
        </Row>
    </div>
}
export default OrdersList;
