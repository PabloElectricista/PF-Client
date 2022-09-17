/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import data from "../../data";

function ProductDetail() {
  const { _id } = useParams();

  const product = data.products.find((x) => x._id === _id);

  const addToCartHandler = async () => { }

  if (!product) return <div>Product Not Found</div>;
  return (
    <div className="mt-5
    ">
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
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
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Pirce : ${product.price}</ListGroup.Item>
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
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

    // <div>
    //   <Link to="/">Back to result</Link>
    //   <div className="row top">
    //     <div className="col-2">
    //       <img className="large" src={product.image} alt={product.name} />
    //     </div>
    //     <div className="col-1">
    //       <ul>
    //         <li>
    //           <h1>{product.name}</h1>
    //         </li>
    //         <li>
    //           {/* <Rating
    //             rating={product.rating}
    //             numReviews={product.numReviews}
    //           ></Rating> */}
    //         </li>
    //         <li>Price: ${product.price}</li>
    //         <li>
    //           Description:
    //           <p>{product.description}</p>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="col-1">
    //       <div className="card card-body">
    //         <ul>
    //           <li>
    //             <div className="row">
    //               <div>Price</div>
    //               <div className="price">${product.price}</div>
    //             </div>
    //           </li>
    //           <li>
    //             <div className="row">
    //               <div>Status</div>
    //               <div>
    //                 {product.countInStock > 0 ? (
    //                   <span className="success">In Stock</span>
    //                 ) : (
    //                   <span className="error">Unavailable</span>
    //                 )}
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <button className="primary block">Add to Cart</button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductDetail;
