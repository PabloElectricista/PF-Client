/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button, Form, FloatingLabel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { useRef, useState } from "react";
import MessageBox from "../../components/MessageBox";
import LoadingBox from "../../components/LoadingBox";
import { toast } from "react-toastify";
import axios from "axios";

// agregado por Nes para funcionalidad cart
import {Store} from '../../Store.js'
import { useContext } from 'react';

function ProductDetail() {
  // hardcoded data
  // userInfo seria un valor que saco del store y que me indica si hay un usuario logueado
  let userInfo = {
    name: "Nestor",
    token: 'ssdkkjaooijfnneraokkk334r4dmmkdk'
  };
  let product1 = {};
  product1.rating = 3;
  product1.reviews = [
    {
      name: "Juan",
      comment: "Muy bueno, lo recomiendo",
      rating: 4,
      createdAt: "2022-04-05T00:00:00.000Z",
    },
    {
      name: "Francisco",
      comment: "Excelente",
      rating: 5,
      createdAt: "2022-05-12T00:00:00.000Z",
    },
    {
      name: "Roberto",
      comment: "Este producto es una mierda",
      rating: 3,
      createdAt: "2022-09-21T00:00:00.000Z",
    },
  ];
  product1.numReviews = 3;

  let { _id } = useParams();

  // agregado para funcionalidad rating y comments
  let reviewsRef = useRef();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const products = useSelector((state) => state.products.products);
  const product = products.find((x) => x._id === _id);

  // funcionalidad para armado de cart
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const addToCartHandler = async () => {
    ctxDispatch({type: 'CART_ADD_ITEM', payload: {product, quantity: 1}})
  };

  if (!product) return <div>Product Not Found</div>;

  // agregado para funcionalidad rating y comments
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment && !rating) {
      toast.error("Por favor ingrese un comentario y una calificación");
      return;
    }
    try {
      const { data } = await axios.post(`/api/products/${product._id}/reviews`, {
        rating, comment, name: userInfo.name
      },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` }
        }
      );

      toast.success("Comentario agregado");
      product1.reviews.usnshift(data);
      // product1.numReviews = data.numReviews;
      product1.numReviews++;
      product.rating = data.rating;
      //  despachar una accion para actualizar el producto: PENDIENTE
      // dispatch({ type: 'REFRESH_PRODUCT', payload: product });
      window.scrollTo({
        behavior: 'smooth',
        top: reviewsRef.current.offsetTop
      })

    } catch {
      toast.error("Error al enviar comentario");
    }
  }

  return (
    <div
      className="mt-5
    "
    >
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.images}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {/* <Helmet> */}
              <title>{product.name}</title>
              {/* </Helmet> */}
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                // cuando funcione el backend, cambiar por product.rating
                rating={product1.rating}
                numReviews={product1.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              <Row xs={1} md={2} className="g-2">
                {/* {[product.image, ...product.images].map((x) => (
                <Col key={x}>
                  <Card>
                    <Button
                      className="thumbnail"
                      type="button"
                      variant="light"
                      // onClick={() => setSelectedImage(x)}
                    >
                      <Card.Img variant="top" src={x} alt="product" />
                    </Button>
                  </Card>
                </Col>
              ))} */}
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Category:</Col>
                    <Col>{product.category}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Stock:</Col>
                    <Col>{product.stock}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Brand:</Col>
                    <Col>{product.brand}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Summary:</Col>
                    <Col>{product.summary}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Colors:</Col>
                    <Col>{product.colors}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <div className="d-grid">
                    <Button onClick={addToCartHandler} variant="primary">
                      Add to Cart
                    </Button>
                  </div>
                </ListGroup.Item>
                {/* )} */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="my-3">
        <h2 ref={reviewsRef}>Reviews</h2>
        {product1.reviews.length === 0 && (
          <MessageBox>No hay revisiones de producto.</MessageBox>
        )}
      </div>
      <ListGroup>
        {product1.reviews.map((review) => (
          <ListGroup.Item key={review._id}>
            <strong>{review.name}</strong>
            <Rating rating={review.rating} caption=" "></Rating>
            <p>{review.createdAt.substring(0, 10)}</p>
            <p>{review.comment}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="my-3">
        {userInfo ? (
          <form onSubmit={submitHandler}>
            <h2>Escriba un comentario de este producto</h2>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Select
                  aria-label="Rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="1">1- Malo</option>
                  <option value="2">2- Regular</option>
                  <option value="3">3- Bueno</option>
                  <option value="4">4- Muy Bueno</option>
                  <option value="5">5- Excelent2</option>
                </Form.Select>
              </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </FloatingLabel>

            <div className="mb-3">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        ) : (
          <MessageBox>
            Please{" "}
            <Link to={`/signin?redirect=/product/${product._id}`}>Sign In</Link>{" "}
            to write a review
          </MessageBox>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
