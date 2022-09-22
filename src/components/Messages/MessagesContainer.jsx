import Messages from './Messages'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Col, Row, Image } from 'react-bootstrap';
import mensages from '../../views/assets/mensages.jpg'

function MessagesContainer() {

    return <div>
        <br></br><br></br><br></br>
        <div className="container p-3" style={{ backgroundColor: "white" }}>
            <Row>
                <Col md={8}>
                    <Tabs
                        defaultActiveKey="Received"
                        className="mb-3"
                    >
                        <Tab eventKey="Received" title="Received">
                            <Messages />
                        </Tab>
                        <Tab eventKey="Sent" title="Sent">
                            <Messages />
                        </Tab>
                    </Tabs>
                </Col>
                <Col md={1}>
                    <Image className='mt-5' src={mensages} width="300px" />
                </Col>
            </Row>
        </div>
    </div>
}

export default MessagesContainer;