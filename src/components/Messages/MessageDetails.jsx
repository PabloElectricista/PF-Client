import { Button, Card, Col, Image, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import escribiendo from '../../views/assets/esccribiendo.jpg'

function MessageDetails() {

    return <div>
        <br></br><br></br><br></br>
        <div className="container m-5  px-5" style={{ backgroundColor: "white", borderRadius: "10px" }}>
            <Card.Header>
                <Button size="sm" variant="primary" className="m-2" data-toggle="tooltip" data-placement="bottom" title="close">
                    <i className="material-icons">clear</i>
                </Button>
                <Button size="sm" variant="secondary" className="m-2" data-toggle="tooltip" data-placement="bottom" title="previous">
                    <i className="material-icons">north</i>
                </Button>
                <Button size="sm" variant="secondary" className="m-2" data-toggle="tooltip" data-placement="bottom" title="next">
                    <i className="material-icons">south</i>
                </Button>
                <Button size="sm" variant="success" className="m-2" data-toggle="tooltip" data-placement="bottom" title="reply">
                    <i className="material-icons">redo</i>
                </Button>
                <Button size="sm" variant="danger" className="m-2" data-toggle="tooltip" data-placement="bottom" title="delete">
                    <i className="material-icons">delete</i>
                </Button>
            </Card.Header>
            <Row>
                <Col md={9}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <Card.Title>
                                            From
                                        </Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Text>
                                            Sender
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <Card.Title>
                                            Subject
                                        </Card.Title>
                                    </Col>
                                    <Col>
                                        <Card.Text>
                                            Dapibus ac facilisis in
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Card.Body className="mb-5">
                                    Cras justo odio
                                    Vestibulum at eros
                                </Card.Body>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={2}>
                    <Image src={escribiendo} className="mb-5" />
                </Col>
            </Row>
        </div>
    </div>
}

export default MessageDetails;
