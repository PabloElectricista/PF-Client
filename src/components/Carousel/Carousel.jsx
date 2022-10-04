/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Carousel.css'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProds } from "../../redux/actions/products";

function Slider() {

  const products = useSelector((state) => state.products.products);


  const [selectedProducts, setSelectedProducts] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let carousel = JSON.parse(localStorage.getItem('carousel'))
    if (carousel === null || carousel.length === 0) {
      getProducts()
    } else {
      setSelectedProducts(carousel)
    }
  }, 
  [])


  function onClick(e) {
    localStorage.setItem("page", 0)
    dispatch(getProds())
    setTimeout(() => {
      navigate(`/product/${e.target.id}`)
    }, 1000);
  }


  const getProducts = () => {

    if (products && products.length > 0) {

      let arrProd = products.filter((data) =>
        data._id === '633b75c675ad20ded98d7e41'
        || data._id === '633b75c675ad20ded98d7e44'
        || data._id === '633b75c675ad20ded98d7e45'
      )
      setSelectedProducts(arrProd);
      localStorage.setItem('carousel', JSON.stringify(arrProd))
    }
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
                src={data.images}
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
