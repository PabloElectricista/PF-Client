/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions/orders'
import { Stack, Pagination } from 'react-bootstrap';
import { useEffect, useState } from "react";
import OrderSelected from './OrderSelected'

function AllOrders() {

    const tkn = localStorage.getItem('tkn')
    const dispatch = useDispatch()
    const { orders, count } = useSelector(state => state.orders.orders)
    const [order, setOrder] = useState({})
    const [pages, setPages] = useState([])
    const [current, setCurrent] = useState(1)

    useEffect(() => {
        dispatch(getOrders(0, tkn))
    }, [])

    useEffect(() => {
        if (count) {
            const maxpages = Math.ceil(count / 20);
            var numbers = []
            for (let i = 1; i <= maxpages; i++) {
                numbers.push(i);
            }
            console.log(maxpages);
            setPages(numbers)
            let items = [];
            for (let number = 1; number <= maxpages; number++) {
                items.push(

                );
            }
        }
    }, [count])

    useEffect(() => {

        console.log(order);

    }, [order])

    const handleselect = e => {
        e.preventDefault();
        setOrder(orders.find(o => o._id === e.target.id))
    }

    return <div>
        <Container className="m-3 p-3">
            <Row>
                <Col xs={1}>
                    <Pagination size="sm">
                        <Stack gap={1}>
                            {pages?.map(page => <>
                                <Pagination.Item
                                    key={page}
                                    active={page === current}
                                    onClick={() => {
                                        setCurrent(page)
                                        dispatch(getOrders(page - 1, tkn))
                                    }}
                                >{page}
                                </Pagination.Item>
                            </>)}
                        </Stack>
                    </Pagination>
                </Col>
                <Col>
                    <Table striped="columns" size="sm" hover>
                        <thead>
                            <th>
                                #
                            </th>
                            <th>
                                Id
                            </th>
                            <th>
                                Products sold
                            </th>
                            <th>
                                Total amount
                            </th>
                            <th>
                                Status order
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                See details
                            </th>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, idx) => <tr key={idx}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        {order.buyer ? order.buyer.username : null}
                                    </td>
                                    <td>
                                        {order.products.length}
                                    </td>
                                    <td>
                                        {order.total_amount}
                                    </td>
                                    <td>
                                        {order.status}
                                    </td>
                                    <td>
                                        {order.createdAt}
                                    </td>
                                    <td>
                                        <Button
                                            id={order._id}
                                            size="sm"
                                            variant="primary"
                                            className="px-0"
                                            onClick={handleselect}
                                        >
                                            details
                                        </Button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <OrderSelected products={order.products} id={order._id} />
                </Col>
            </Row>
        </Container>
    </div>
}

export default AllOrders;