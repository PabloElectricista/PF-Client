/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from "react-bootstrap";
import Graphic from "./Graphic";
import TotalProfit from "./TotalProfit";
import BestUserTables from "./BestUserTables";
import TotalSales from "./TotalSales";
import Adons from "./Adons";
import { bestUsers } from "./bestUsers";
import { bestsellers } from "./bestsellers";
import { orderssummary } from "./orderssummary";
import { useState } from "react";
import { useEffect } from "react";
import BestSellersTable from "./BestSellersTable";
import { getprofit } from "./getprofit";

function Balance() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [totalsales, setTotalsales] = useState([])
    const [totalprofit, setTotalprofit] = useState([])

    useEffect(() => {
        bestUsers()
            .then(users => {
                setUsers(users)
                setProducts(bestsellers(users[2].sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })))
                setOrders(orderssummary(users[3].sort((a, b) => {
                    if (a.date > b.date) return 1;
                    if (a.date < b.date) return -1;
                    return 0;
                })))
            })
    }, [])

    useEffect(() => {
        if (users && users.length > 0) {
            let month = `${new Date().getMonth() + 1}`
            let thismonth = month.length === 1 ? 0 + month : month
            month = `${new Date().getMonth()}`
            let lastmonth = month.length === 1 ? 0 + month : month
            let orderscurrent = users[3].filter(order => order.date.slice(5, 7) === thismonth)
            let orderspast = users[3].filter(order => order.date.slice(5, 7) === lastmonth)
            setTotalsales([orderscurrent.length, orderspast.length])
            setTotalprofit([getprofit(orderscurrent), getprofit(orderspast)])
        }
    }, [users])

    return <>
        <Container>
            <h1 className="text-primary">Total Balance</h1>
            <Row className="p-3 m-3 justify-content-around align-items-center">
                <Col md={12}>
                    <Graphic orders={orders} />
                </Col>
            </Row>
            <Row className="p-3 m-3 justify-content-around align-items-baseline">
                <Col md={4}>
                    <TotalProfit months={months} totalprofit={totalprofit} />
                </Col>
                <Col md={4}>
                    <Adons months={months} />
                </Col>
                <Col md={4}>
                    <TotalSales months={months} totalsales={totalsales} />
                </Col>
            </Row>
            <Row className="justify-content-around">
                <Col md={4}>
                    <BestUserTables title={"Users bought more products"} users={users[1]} field={"products"} />
                </Col>
                <Col md={4}>
                    <BestUserTables title={"users spent more"} users={users[0]} field={"amount"} />
                </Col>
                <Col md={4}>
                    {products && products.length > 0 ? <BestSellersTable products={products} /> : <h5 className="text-center text-warning">No products purchased yet</h5>}
                </Col>
            </Row>
        </Container>
    </>
}

export default Balance;