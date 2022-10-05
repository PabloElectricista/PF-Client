/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from "react-bootstrap";
import { Stack, Pagination } from 'react-bootstrap';
import { useEffect, useState } from "react";
import OrderSelected from './OrderSelected'
import OrdersList from './OrdersList'
import axios from "axios";
import { toast } from "react-toastify";

function AllOrders() {

    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState(null)
    const [count, setCount] = useState(1)
    const [id, setId] = useState(null)
    const [pages, setPages] = useState([1])
    const [current, setCurrent] = useState(1)

    useEffect(() => {
        if (orders && orders.length === 0) getOrders()
    }, [])

    const getOrders = (page) => {
        axios("/orders?start="+page, {
            headers: {
                credential: localStorage.getItem('tkn')
            }
        })
        .then(({data}) => {
            setOrders(data.orders)
            setCount(data.count)
        })
        .catch(error => toast(`${error.message}`, { type: "error" }))
    }

    const changestatus = (id, status) => {
        axios.put(`/orders/${id}`, {status}, {
            headers: {
                credential: localStorage.getItem('tkn')
            }
        })
        .then(() => getOrders(current-1))
        .catch(error => toast(`${error.message}`, { type: "error" }))
    }

    useEffect(() => {
        if (count > 0) {
            const maxpages = Math.ceil(count / 20);
            var numbers = []
            for (let i = 1; i <= maxpages; i++) {
                numbers.push(i);
            }
            setPages(numbers)
        }
    }, [count])

    useEffect(() => {
        let selected = orders.find(user => user._id === id)
        setOrder(selected)
    }, [id])


    return <div>
        <Container className="m-3 p-3">
            <Row>
                <Col xs={1}>
                    <Pagination size="sm" className="mt-4 pt-2">
                        <Stack gap={1}>
                            {pages?.map(page => <Pagination.Item
                                    key={page}
                                    active={page === current}
                                    onClick={() => {
                                        setCurrent(page)
                                        getOrders(page - 1)
                                    }}
                                >{page}
                                </Pagination.Item>)}
                        </Stack>
                    </Pagination>
                </Col>
                <Col>
                    <OrdersList orders={orders} setId={setId} id={id} />
                </Col>
                <Col md={3}>
                    <OrderSelected order={order} changestatus={changestatus}/>
                </Col>
            </Row>
        </Container>
    </div>
}

export default AllOrders;