import { useState } from 'react';
import { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import OrdersCards from './OrdersCards'

function OrdersList() {

    const orders = useSelector(state => state.orders.ordersuser)
    const [items, setitems] = useState([])

    useEffect(() => {
        if (orders && orders.length > 0) {
            const list = [{ date: orders[0].createdAt.slice(0, 10), orders: [{ ...orders[0] }] }]
            let j = 0
            for (let i = 1; i < orders.length; i++) {
                if (list[j].date === orders[i].createdAt.slice(0, 10)) {
                    list[j].orders.push(orders[i])
                }
                else {
                    list.push({ date: orders[i].createdAt.slice(0, 10), orders: [{ ...orders[i] }] })
                    j++
                }
            }
            setitems(list)
        }
    }, [orders])

    return <div className='mt-3 mx-auto'>
        {orders && orders.length > 0 ? (items && items.length > 0 && items.map((order, idx) =>
            <OrdersCards key={idx} orders={order.orders} date={order.date} products={order.orders.orderItems} />
        )) : <Col md={6}>
            <h2 className='text-center text-warning'>you have no</h2>
            <h2 className='text-center text-warning'>orders yet</h2>
        </Col>}
    </div>
}
export default OrdersList;
