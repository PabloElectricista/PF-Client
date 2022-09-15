import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "../Rating/Rating";

function Product({ _id, name, images, rating, numReviews, price }) {

  return <div className="my-3">
    <Card>
      <Link to={`product/${_id}`}>
        <img src={images[0]} alt={name} className="card-img-top" style={{ height: 200 }} />
      </Link>
      <Card.Body>
        <Link to={`product/${_id}`}>
          <Card.Title>{name}</Card.Title>
        </Link>
      </Card.Body>
      <Rating
        rating={rating}
        numReviews={numReviews}
      />
      <Card.Text className="px-3">$ {price}</Card.Text>
      <Button>Add to cart</Button>
    </Card>
  </div>
}

export default Product;