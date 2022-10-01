import { Col, Container, Row } from "react-bootstrap";
import Graphic from "./Graphic";
import TotalProfit from "./TotalProfit";
import allthemagic from "./allthemagic";
import BestTables from "./BestTables";
import TotalSales from "./TotalSales";
import Adons from "./Adons";

function Balance() {

    const text = allthemagic()

    return <>
        <Container>
            <h1>Total Balance</h1>
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
            <Row  className="p-3 m-3 justify-content-between">
                <Col md={3}>
                    <BestTables title={text} model={"users"} />
                </Col>
                <Col md={3}>
                    <BestTables title={text} model={"sellers"} />
                </Col>
                <Col md={3}>
                    <BestTables title={text} model={"rated"} />
                </Col>
            </Row>
        </Container>
    </>
}

export default Balance;