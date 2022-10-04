import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import OrdersCards from './OrdersCards'

function OrdersList() {

    const orders = useSelector(state => state.orders.ordersuser)
    const [items , setitems] = useState([])
    useEffect(()=>{
        if(orders && orders.length > 0) {
            const list = []
            for (const order of orders) {
                list.push({
                    ...order,
                    date:order.createdAt.slice(0, 10)
                })
            }
            console.log(list)
        }
    }, [orders])
    
    return <div>
        <Row>
            <Col md={8}>
                lista{/* {products && products.length > 0 && products.map(order => <OrdersCards order={order} />)} */}
            </Col>
            
        </Row>
    </div>
}
export default OrdersList;
