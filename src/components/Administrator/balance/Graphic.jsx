import { Card, Col, Row } from "react-bootstrap";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Graphic({ orders }) {


    return <div className="mt-3 align-self-center" >
        <Card
            border="primary"
            style={{ padding: '20px' }}
        >
            <Card.Title className="text-danger mb-3">Total amounts per day </Card.Title>
            <Row>
                <Col>
                    <LineChart width={800} height={300} data={orders[0]} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="totalamount" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Card.Text className="fw-bold text-primary">Best</Card.Text>
                            <Card.Text className="fw-bold text-primary">Worst</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className="fw-bold text-success">{orders[2]}</Card.Text>
                            <Card.Text className="fw-bold text-success">{orders[1]}</Card.Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    </div>
}

export default Graphic;