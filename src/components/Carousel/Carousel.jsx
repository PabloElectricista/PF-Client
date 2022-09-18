import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import './Carousel.css'

const products = [
  {
    name: "T-Force Delta",
    content:
      "La mejor memoria ram DDR5 del momento!!",
    link:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKt-yVXuSjyTVmyL5LlQdhiGUvkNbQY0pSyQ&usqp=CAU"
  },
  {
    name: "Descuento 20% !!",
    content:
      "Placa Video Nvidia Geforce Evga Rtx 3080ti 12g Ftw3 Ultra !",
    link:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDA9JJJzA7v9mHdL8cAgZGIlSC4pNZhRn2Gl8INgGRjKQ0VJXjOw3uU4-kBQyP4DKCLU&usqp=CAU"
  },
  {
    name: "Laptop Asus",
    content:
      "La portatil mas vendida del 2022",
    link:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PweM-sVmZH2wcOOtuSjSy30-zBok_WjA8w&usqp=CAU"
  }
];

function Slider() {
  return (
    <Container className="products-container">
      <h2 className="products-container-heading">Productos destacados</h2>
      <Carousel className="products-carousel-container">
        {products.map((data, i) => (
          <Carousel.Item key={i} className="products-carousel-item">
            <Image
              className="products-carousel-img"
              src= {data.link}
              alt={data.name}
            />
            <Carousel.Caption className="products-carousel-caption">
              <h5 className="products-caption-title">{data.name}</h5>
              <p>
                <q>
                  {data.content}
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

