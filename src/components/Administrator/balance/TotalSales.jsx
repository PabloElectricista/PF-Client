import { Card, Col, Row } from "react-bootstrap";

function TotalSales({ totalsales, months }) {

    let current = new Date().getMonth()

    return <div className="container text-center mx-2 p-3">
        <Card
            style={{ width: '15rem', padding: "10px" }}
            border="primary"
        >
            <Card.Title className="text-danger">Total Sales</Card.Title>
            <hr></hr>
            <Row>
                <Col>
                    <Card.Text className="text-primary">{months[current-1]}</Card.Text>
                    <Card.Text className="text-primary">{months[current]}</Card.Text>
                </Col>
                {totalsales && totalsales.length > 0 ?
                    (<Col>
                        <Card.Text className="text-success">{totalsales[1]}</Card.Text>
                        <Card.Text className="text-success">{totalsales[0]}</Card.Text>
                    </Col>)
                    : "waiting data..."}
            </Row>
        </Card>
    </div>
}

export default TotalSales;