import { Col, Container, Row } from "react-bootstrap";
import Graphic from "./Graphic";
import TotalProfit from "./TotalProfit";
import BestUserTables from "./BestUserTables";
import TotalSales from "./TotalSales";
import Adons from "./Adons";
import { bestUsers } from "./bestUsers";
import { bestsellers } from "./bestsellers";
import { useState } from "react";
import { useEffect } from "react";
import BestSellersTable from "./BestSellersTable";

function Balance() {

    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        bestUsers()
        .then(users => {
            setProducts(bestsellers(users[2].sort((a, b) =>{
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            })))
            setUsers(users)})

    }, [])

    useEffect(() => console.log(products), [products])
    // console.log(new Date().getMonth());

    return <>
        <Container>
            <h1 className="text-primary">Total Balance</h1>
            <Row className="p-3 m-3 justify-content-between">
                <Col md={8}>
                    <Graphic />
                </Col>
                <Col md={3}>
                    <TotalProfit />
                    <Adons />
                    <TotalSales />
                </Col>
            </Row>
            <Row className="justify-content-around">
                <Col md={4}>
                    <BestUserTables title={"Users bought more products"} users={users[1]} field={"totalproducts"} />
                </Col>
                <Col md={4}>
                    <BestUserTables title={"users spent more"} users={users[0]} field={"totalamount"} />
                </Col>
                <Col md={3}>
                    {products && products.length > 0 ? <BestSellersTable products={products}/> : <span>No products</span>}
                </Col>
            </Row>
        </Container>
    </>
}

export default Balance;