import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Carousel.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Slider() {

  const products = useSelector((state) => state.products.products);
  const [selectedProducts, setSelectedProducts] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    let carousel = JSON.parse(localStorage.getItem('carousel'))
    if (carousel !== null ) {
      setSelectedProducts(carousel)
    }
  }, 
  [])

  useEffect(() => {
    if (products && products.length > 0) {
      let arrProd = products.filter((data, idx) =>
        idx === 2 ||
        idx === 4 ||
        idx === 6
      )
      localStorage.setItem('carousel', JSON.stringify(arrProd))
      setSelectedProducts(arrProd); 
    }
  }, 
  [products])

  function onClick(e) {
    navigate(`/product/${e.target.id}`)
  }

  
  
  return (
    <Container className="products-container">
      <h2 className="products-container-heading">Productos destacados</h2>
      <Carousel className="products-carousel-container">
        {selectedProducts?.map((data, i) => (
          <Carousel.Item key={i} className="products-carousel-item">
            <div >
              <Image id={data._id} onClick={(e) => onClick(e)}
                className="products-carousel-img"
                src={data.images[0]}
                alt={data.name}
              />
            </div>
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
