import { Card, Col, Row } from "react-bootstrap";

function Adons({months}) {

    let current = new Date().getMonth()

    return <div className="container text-center mx-2 p-2">
        <Card
            border="primary"
            style={{ width: '15rem', padding: "10px" }}
        >
            <Card.Title className="text-danger">Ad Earning</Card.Title>
            <hr></hr>
            <Row>
                <Col>
                    <Card.Text className="text-primary">{months[current - 1]}</Card.Text>
                    <Card.Text className="text-primary">{months[current]}</Card.Text>
                </Col>
                <Col>
                    <Card.Text className="text-success">$5.800</Card.Text>
                    <Card.Text className="text-success">$1.000</Card.Text>
                </Col>
            </Row>
        </Card>
    </div>
}

export default Adons;