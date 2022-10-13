import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "../Rating/Rating";
import axios from 'axios';
import {useContext} from 'react';
import {Store} from '../../Store.js'

function Product({ _id, name, images, rating, numReviews, price, stock }) {

  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { cart: { cartItems }} = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === _id)
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/products/${item._id}`);
    if (data.stock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return <div className="m-2" style={{width:"13rem"}}>
    <Card>
      <Link to={`product/${_id}`}>
        <img src={images[0]} alt={name} className="card-img-top" style={{ height: 200 }} />
      </Link>
      <Card.Body>
        <Link to={`product/${_id}`}>
          <Card.Title style={{height:"5rem"}}>{name}</Card.Title>
        </Link>
      </Card.Body>
      <Rating
        rating={rating}
        numReviews={numReviews}
      />
      <Card.Text className="px-3">$ {price}</Card.Text>
        {stock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler({_id, name, images, price})}>Add to cart</Button>
        )}
    </Card>
  </div>
}

export default Product;