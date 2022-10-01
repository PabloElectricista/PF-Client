import { Card, Image } from "react-bootstrap";

function ProductSelected({ product }) {


    return <>
        {product ? (<>
            <Card className="text-center text-danger p-2 mx-2">
                <Card.Title className="mx-auto">Product selected</Card.Title>
                <Card.Body className="mx-auto">
                    <Image
                        src={product.images[0]}
                        alt="product"
                        width="200"
                    />
                    <Card.Text>
                        <p className="fw-bold">ID:</p> {product._id}
                    </Card.Text>
                    <Card.Text>
                        <p className="fw-bold">Name: </p> {product.name}
                    </Card.Text>
                    <Card.Text>
                        <p className="fw-bold">Brand: </p> {product.brand}
                    </Card.Text>
                    <Card.Text>
                        <p className="fw-bold">Category: </p> {product.category}
                    </Card.Text>
                    <Card.Text>
                        <p className="fw-bold">Description: </p> {product.description}
                    </Card.Text>
                    <Card.Text>
                        <p className="fw-bold">Status: </p> {product.status}
                    </Card.Text>
                    <Card.Text>
                        <p className="fw-bold">Rating: </p> {product.rating}
                    </Card.Text>
                    <Card.Text>
                        <p className="fw-bold">Reviews: </p> {product.numReviews}
                    </Card.Text>
                    <Card.Text>
                        <p className="fw-bold">Published: </p> {product.createdAt.slice(0, 10)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>) : <div>no product selected</div>}
    </>
}

export default ProductSelected;