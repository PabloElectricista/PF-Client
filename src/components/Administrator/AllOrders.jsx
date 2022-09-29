/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions/orders'
import { ListGroup, Stack, Pagination } from 'react-bootstrap';
import { useEffect, useState } from "react";

function AllOrders() {

    const tkn = localStorage.getItem('tkn')
    const dispatch = useDispatch()
    const { orders, count } = useSelector(state => state.orders.orders)
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



    return <div>
        <Container className="m-3 p-3">
            component AllOrders
            <Row>
                <Col xs={1}>
                    <Pagination size="sm">
                        <Stack gap={1}>
                            {pages?.map(page => <>
                                <Pagination.Item
                                    key={page}
                                    active= {page === current}
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
                    <ListGroup >
                        {
                            orders?.map((order) => <ListGroup.Item>
                                <Row>
                                    <Col>
                                        {order._id}
                                    </Col>
                                    <Col>
                                        {order.products.length}
                                    </Col>
                                    <Col>
                                        {order.total_amount}
                                    </Col>
                                    <Col>
                                        {order.status}
                                    </Col>
                                    <Col>
                                        {order.createdAt}
                                    </Col>
                                    <Col>
                                        <Button size="sm" variant="primary">details</Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>)


                        }
                    </ListGroup>
                </Col>

            </Row>
        </Container>
    </div>
}

export default AllOrders;