import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Message({ from, subject }) {

    return <>
        <Row>
            <Col>
                <Card.Body>
                    {from}
                </Card.Body>
            </Col>
            <Col>
                <Card.Body>
                    {subject}
                </Card.Body>
            </Col>
        </Row>
    </>
}

export default Message;
