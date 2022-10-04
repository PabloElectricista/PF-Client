import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Carousel.css'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getProds } from "../../redux/actions/products";

function Slider() {

  // const products = useSelector((state) => state.products.products);
  // const prodArr = [];

  const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  const navigate= useNavigate();

  useEffect(() => {
    getProducts()
    }
, [])


    function onClick(e){
      localStorage.setItem("page",0)
      dispatch(getProds())
      setTimeout(() => {
        navigate(`/product/${e.target.id}`)
    }, 1000);
    }
    

  const getProducts = async (start) => {
  
      try {
          let { data } = await axios(`/products?start=${start}&limit=100`)
          let arrProd = data.products.filter((data) => 
            data._id === '63363c6449b05c2512c0858e' 
            || data._id === '63363c6449b05c2512c0858d' 
            || data._id === '63363c6449b05c2512c0858a'
            )
              setProducts(arrProd);
            
    
      } catch (error) { console.log(error) }

  }
  console.log('>>>>>>>>>>>>>>', products)
  
  useEffect(() => {
    console.log(products)
    }
, [products])
  

 
  return (
    <Container className="products-container">
      <h2 className="products-container-heading">Productos destacados</h2>
      <Carousel className="products-carousel-container">
        {products?.map((data, i) => (
          <Carousel.Item key={i}  className="products-carousel-item">
            <div >
              <Image id={data._id} onClick={(e) => onClick(e) } 
                className="products-carousel-img"
                src= {data.images}
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
