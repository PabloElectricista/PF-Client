import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";

function Product(props) {
  const { product } = props;


  return (
    <Card>
      <Link to={`product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
      </Card.Body>
      <Rating
        rating={product.rating}
        numReviews={product.numReviews}
      />
      <Card.Text className="px-3">$ {product.price}</Card.Text>
      <Button>Add to cart</Button>
    </Card>
  );
}

export default Product;