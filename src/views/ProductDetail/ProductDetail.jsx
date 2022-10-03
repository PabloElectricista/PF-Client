/* eslint-disable no-unused-vars */
import {
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { useRef, useState, useEffect } from "react";
import MessageBox from "../../components/MessageBox";
import LoadingBox from "../../components/LoadingBox";
import { toast } from "react-toastify";
import axios from "axios";

// agregado por Nes para funcionalidad cart
import { Store } from "../../Store.js";
import { useContext } from "react";
import { useReducer } from "react";
import { getError } from "../../utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_PRODUCT":
      return { ...state, product: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreateReview: true };
    case "CREATE_SUCCESS":
      return { ...state, loadingCreateReview: false };
    case "CREATE_FAIL":
      return { ...state, loadingCreateReview: false };
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductDetail() {
  let reviewsRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { _id } = useParams();

  // agregado para funcionalidad rating y comments
  // ideal si pudiera tener a product tambien en mi reducer... VER
  const [{ loading, error, loadingCreateReview }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      error: "",
    }
  );

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // react-redux
  const products = useSelector((state) => state.products.products);
  // agregado por nes - userInfo lo obtengo del state react-redux
  const userInfo = useSelector((state) => state.users.user);
  const product = products.find((x) => x._id === _id);
  console.log("producto encontrado: ", product)

  // funcionalidad para armado de cart
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/products/${product._id}`);
    if (data.stock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }

    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
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
      const { data } = await axios.post(
        `/products/${product._id}/reviews`,
        {
          rating,
          comment,
          name: userInfo.username,
        },
        {
          headers: { credential: localStorage.getItem("tkn") },
        }
      );

      // dispatch({
      //   type: "CRATE_SUCCESS",
      // });
      toast.success("Comentario agregado satisfactoriamente.");
      // data trae message, numReviews, rating, review{}
      console.log("ultimo product review: ", data.review);
      // estoy agregando un objeto con el ultimo review
      product.reviews.unshift(data.review);
      product.numReviews = data.numReviews;
      // alternativa: product.numReviews++;
      product.rating = data.rating;

      console.log("product reviews actualizado: ", product)
      //  despachar una accion para actualizar el producto: PENDIENTE
      // dispatch({ type: "REFRESH_PRODUCT", payload: product });
      window.scrollTo({
        behavior: "smooth",
        top: reviewsRef.current.offsetTop,
      });
    } catch (err) {
      toast.error(getError(err));
    }
  };
  //

  return (
    <div className="order-container">
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
                rating={product.rating}
                numReviews={product.numReviews}
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
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="my-3">
        <h2 ref={reviewsRef}>Reviews</h2>
        <div className="mb-3">
          {product.reviews.length === 0 && (
            <MessageBox>No hay revisiones de producto.</MessageBox>
          )}
        </div>
      </div>

      <ListGroup>
        {product.reviews.map((review) => (
          <ListGroup.Item key={review._id}>
            <strong>{review.name}</strong>
            <Rating rating={review.rating} caption=" "></Rating>
            <p>{review.createdAt.substring(0, 10)}</p>
            <p>{review.comment}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="my-3">
        {/* {userInfo ? ( */}
        {Object.keys(userInfo).length > 0 ? (
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
                <option value="5">5- Excelente</option>
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
              <Button disabled={loadingCreateReview} type="submit">
                Submit
              </Button>
              {loadingCreateReview && <LoadingBox></LoadingBox>}
            </div>
          </form>
        ) : (
          <MessageBox variant="danger">
            Please{" "}
            <span style={{ fontSize: "20px" }} className="fw-bold">
              Login{" "}
            </span>
            to write a review
          </MessageBox>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
