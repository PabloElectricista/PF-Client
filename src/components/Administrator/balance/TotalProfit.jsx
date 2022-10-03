import { Card, Col, Row } from "react-bootstrap";

function TotalProfit({months, totalprofit}) {

    let current = new Date().getMonth()

    return <div className="container text-center mx-2 p-3">
        <Card
            style={{ width: '15rem', padding: "10px" }}
            border="primary"
        >
            <Card.Title  className="text-danger">Total Profit</Card.Title>
            <hr></hr>
            <Row>
                <Col>
                    <Card.Text className="text-primary">{months[current - 1]}</Card.Text>
                    <Card.Text className="text-primary">{months[current]}</Card.Text>
                </Col>
                <Col>
                    <Card.Text className="text-success">{totalprofit[1]}</Card.Text>
                    <Card.Text className="text-success">{totalprofit[0]}</Card.Text>
                </Col>
            </Row>
        </Card>
    </div>
}

export default TotalProfit;