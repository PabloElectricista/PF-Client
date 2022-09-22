import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { LinkContainer } from "react-router-bootstrap";

function Message({ from, subject }) {

    return <>
        <Row>
            <Col>
                <Card.Body>
                    {from}
                </Card.Body>
            </Col>
            <Col>
                <LinkContainer to={`/admin/messagedetails/id`}  style={{cursor:"pointer"}}>
                    <Card.Body>
                        {subject}
                    </Card.Body>
                </LinkContainer>
            </Col>
        </Row>
    </>
}

export default Message;
