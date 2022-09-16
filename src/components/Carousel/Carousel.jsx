import Carousel from 'react-bootstrap/Carousel';

function Carouselito() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yRSLYF--XVNstyOrDrMMirbEIceXakCoYw&usqp=CAU"
          alt="First slide"
          height={500}
          width={100}
        />
        <Carousel.Caption>
          <h5>Monitor</h5>
          <p>Samsung</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--CFMVK1sGUIMd7BfgXpP6dT6Iu67dpWEaw&usqp=CAU"
          alt="Second slide"
          height={500}
          width={100}
        />
        <Carousel.Caption>
          <h5>Placa de video</h5>
          <p>Clearance</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcxvhYq7Xm7sRGzbCMtzx9CuxAHzr2tVYDg&usqp=CAU"
          alt="Third slide"
          height={500}
          width={100}
        />
        <Carousel.Caption>
          <h5>Gabinete</h5>
          <p>
            Override
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselito;