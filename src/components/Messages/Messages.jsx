import Message from './Message'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';

function Messages() {
    const messages = [
        { sender: "user1", subject: "Cras justo odio" },
        { sender: "user2", subject: "Dapibus ac facilisis in" },
        { sender: "user3", subject: "Vestibulum at eros" }
    ];

    const dates = [
        { day: "2022-09-18", messages },
        { day: "2022-09-19", messages },
        { day: "2022-09-20", messages }
    ]

    return <div>
        {dates.map(date => <Card border="primary" className='m-3'>
            <Card.Subtitle className="m-2 ">{date.day}</Card.Subtitle>
            <Row>
                <Col>
                    <Card.Title>
                        from
                    </Card.Title>
                </Col>
                <Col>
                    <Card.Title>
                        subject
                    </Card.Title>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup variant="flush">
                        {date.messages.map(mes => <ListGroup.Item>
                            <Message subject={mes.subject} from={mes.sender} />
                        </ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Card>)}
    </div>
}

export default Messages;
