import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Carousel.css'
import { useSelector } from "react-redux";


function Slider() {

  const products = useSelector((state) => state.products.products);
  const prodArr = [];
  
  products.map((data) => {
    if(data._id === '63363c6449b05c2512c0858e' || data._id === '63363c6449b05c2512c0858f' || data._id === '63363c6449b05c2512c08590')
    prodArr.push(data);
    return prodArr
  })  
  
  return (
    <Container className="products-container">
      <h2 className="products-container-heading">Productos destacados</h2>
      <Carousel className="products-carousel-container">
        {prodArr.map((data, i) => (
          <Carousel.Item key={i}  className="products-carousel-item">
            <Link to={`product/${data._id}`}>
              <Image
                className="products-carousel-img"
                src= {data.images}
                alt={data.name}
              />
            </Link>
            <Carousel.Caption className="products-carousel-caption">
              <h5 className="products-caption-title">{data.name}</h5>
              <p>
                <q>
                  {data.summary}
                </q>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Slider;
