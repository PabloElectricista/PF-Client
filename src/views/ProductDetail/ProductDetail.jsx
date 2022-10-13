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
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import MessageBox from "../../components/MessageBox";
import LoadingBox from "../../components/LoadingBox";
import { toast } from "react-toastify";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// agregado por Nes para funcionalidad cart
import { Store } from "../../Store.js";
import { getError } from "../../utils";


const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_PRODUCT":
      return { ...state, product: action.payload };
    // case "CREATE_REQUEST":
    //   return { ...state, loadingCreateReview: true };
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

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [client, setClient] = useState({})
  const navigate = useNavigate();
  let { _id } = useParams();

  // agregado para funcionalidad rating y comments
  // ideal si pudiera tener a product tambien en mi reducer... VER
  const [{ loading, error, product, loadingCreateReview }, dispatch] =
    useReducer(reducer, {
      product: {},
      loading: true,
      error: "",
    });

  // react-redux

  //const userInfo = useSelector((state) => state.users.user);

  // el problema de traer el producto del estado de redux es que
  // con el manejo del carrito, cualquier modificacion a reviews / stock
  // tambien habria que modificar el estado global y no estan hechas las rutas
  // ni controladores para modificar un producto en redux
  // const products = useSelector((state) => state.products.products);
  // const product = products.find((x) => x._id === _id);

  // para que al cargar por primera vez la pagina vaya arriba del todo
  // y carga el estado productResult para renderizar la pagina detail
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   dispatch({ type: "FETCH_SUCCESS", payload: product });
  // }, []);

  // agregado ahora
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/products/${_id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data.product });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [_id]);

  useEffect(() => {
    const clientstate = JSON.parse(localStorage.getItem('user'))
    setClient(clientstate === null ? {} : clientstate)
  }, [])


  // funcionalidad para armado de cart
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  // agrega producto al carrito y manda a pagina de carrito
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    navigate("/cart");
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
          name: client.username,
        },
        {
          headers: { credential: localStorage.getItem("tkn") },
        }
      );

      dispatch({
        type: "CREATE_SUCCESS",
      });
      toast.success("Comentario agregado satisfactoriamente.");

      const copy = JSON.parse(JSON.stringify(product));

      copy.allReviews.unshift(data.review);

      copy.numReviews = data.numReviews;

      copy.rating = data.rating;

      dispatch({ type: "REFRESH_PRODUCT", payload: copy });

      window.scrollTo({
        behavior: "smooth",
        top: reviewsRef.current.offsetTop,
      });
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return loading ? (
    <LoadingBox />
  ) : (
    <div className="order-container">
      <Row>
        <Col md={8}>
          <div className="container details">
          <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper bg-white"
            >
                {
                    product.images.map((image, i)=> <SwiperSlide key={i} className="m-5 p-5"
                >
                    <img src={image} alt="product" />
                </SwiperSlide>
                    )
                }
            </Swiper>
          </div>
        </Col>
        
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <title>{product.name}</title>
                  <h1>{product.name}</h1>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </ListGroup.Item>
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
                    <Col>Description:</Col>
                    <Col>{product.description}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Colors:</Col>
                    <Col>{product.colors.join(', ')}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.status}</Col>
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
        <h2 ref={reviewsRef} className="text-light">
          Reviews
        </h2>
        <div className="mb-3">
          {product.allReviews.length === 0 && (
            <MessageBox>No hay revisiones de producto.</MessageBox>
          )}
        </div>
      </div>

      <ListGroup>
        {product.allReviews.map((review) => (
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
        {Object.keys(client).length > 0 ? (
          <form onSubmit={submitHandler}>
            <h2 className="text-light">
              Escriba un comentario de este producto
            </h2>
            <Form.Group className="mb-3" controlId="rating">
              <Form.Label className="text-light">Rating</Form.Label>
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
              label="Commentarios"
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
