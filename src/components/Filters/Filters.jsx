import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import './Filters.css';
import { Col, Row } from 'react-bootstrap';

function Filters() {

    return <Card className="filtersContainer my-3" border="primary" style={{ width: '17rem' }}>
        <Form.Group className="brandFilter">
            <Form.Select
                size="sm"
            >
                <option>Brand</option>
                <option value="1">One</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="statusFilter">
            <Form.Select size="sm">
                <option>Status</option>
                <option value={true}>New</option>
                <option value={false}>Used</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="colorFilter">
            <Form.Select size="sm">
                <option>color</option>
                <option value="1">One</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="filterPrice">
            <Row>
                    <Form.Label>Price</Form.Label>
                <Col>
                    <Form.Label>min</Form.Label>
                    <Form.Control type='Number' min={0} />
                </Col>
                <Col>
                    <Form.Label>max</Form.Label>
                    <Form.Control type='Number' max={10000} />
                </Col>
            </Row>
        </Form.Group>
    </Card>
}

export default Filters;