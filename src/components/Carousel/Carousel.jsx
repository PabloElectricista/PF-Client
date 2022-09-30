import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Carousel.css'



const products = [
  {
    _id: '6327ad58cb1442103528399b',
    name: "DISCO SOLIDO SSD KINGSTON A400 1.92TB",
    summary:
      "La unidad A400 de estado sólido de Kingston ofrece enormes mejoras en la velocidad de respuesta. 10 años de garantia!",
    image:
      "https://clonesyperifericos.com/wp-content/uploads/2022/08/1-15-600x600.jpg"
  },
  {
    _id:'6327ad58cb1442103528399d',
    name: "PORTATIL MSI KATANA GF76 12UC INTEL I7 12700H RTX 3050",
    summary:
      "Katana GF es tan poderosa y resistente como una espada y está lista para un optimo rendimiento",
    image:
      "https://clonesyperifericos.com/wp-content/uploads/2022/08/0-600x600.jpg"
  },
  {
    _id:'6327ad58cb14421035283990',
    name: "GIGABYTE RTX 3050 GAMING OC 8G",
    summary:
      "El sistema de refrigeración WINDFORCE 3X cuenta con 3 ventiladores de hoja exclusivos de 80 mm que juntos proporcionan una disipación de calor de alta eficiencia.",
    image:
      "https://clonesyperifericos.com/wp-content/uploads/2022/08/1-64-600x600.jpg"
  }
];

function Slider() {

  return (
    <Container className="products-container">
      <h2 className="products-container-heading">Productos destacados</h2>
      <Carousel className="products-carousel-container">
        {products.map((data, i) => (
          <Carousel.Item key={i}  className="products-carousel-item">
            <Link to={`product/${data._id}`}>
              <Image
                className="products-carousel-img"
                src= {data.image}
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
