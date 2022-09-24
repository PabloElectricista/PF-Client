import { useContext } from 'react';
import { Store } from '../Store';
import { Row, Col, ListGroup, Button, Image, Card } from 'react-bootstrap';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom'


export default function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart: { cartItems }} = state;


   const checkoutHandler = () => {
    // navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <h1 className="my-5 pt-5 text-light">Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ):
          (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.images}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                        style={{ height: 80 }}
                      ></img>{' '}
                      <Link to={`/product/${item._id}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button variant="light" disabled={item.quantity === 1}>
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button variant="light" disabled={item.quantity === item.stock}>
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>$ {item.price}</Col>
                    <Col md={2}>
                      <Button variant="light">
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )
        }
        </Col>
                <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  )
}