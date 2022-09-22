import { Col, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { useNavigate } from "react-router-dom";

function OrderItem({ product, updatedAt, listname}) {

    const navigate = useNavigate();
    
    return (
        <>
            <Row>
                <Col md={3} >
                    <Image src= {product.images} width="150" className="m-2"/>
                </Col>
                <Col md={5}>
                    <Card.Text>
                        {listname} the {updatedAt.slice(0, 10)}
                    </Card.Text>
                    <Card.Text>
                        {product.summary}
                    </Card.Text>
                    <Card.Text>
                        product.user.username
                    </Card.Text>
                </Col>
                <Col md={3}>
                    <Button
                        type="button"
                        variant="outline-primary"
                        className="my-2"
                        style={{fontWeight:"bolder"}}
                    onClick={() => navigate(`/admin/ordersdetails/${product._id}`)}
                    >
                        see order
                    </Button>
                    &nbsp;
                    <Button
                        type="button"
                        variant="outline-primary"
                        className="my-2"
                        style={{fontWeight:"bolder"}}
                    /* onClick={() => deleteHandler(orders)} */
                    >
                        buy again
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default OrderItem;
