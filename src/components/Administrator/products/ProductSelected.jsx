import { Card, Image } from "react-bootstrap";

function ProductSelected({ product }) {


    return <div className="container pe-3">
        {product ? (<>
            <Card className="text-center text-danger p-2 mx-2">
                <Card.Title className="mx-auto">Product selected</Card.Title>
                <Card.Body className="mx-auto">
                    <Image
                        src={product.images[0]}
                        alt="product"
                        width="200"
                    />
                    <Card.Text className="fw-bold">
                        ID:
                    </Card.Text>
                    <Card.Text>
                        {product._id}
                    </Card.Text>
                    <Card.Text className="fw-bold">
                        Name:
                    </Card.Text>
                    <Card.Text>
                        {product.name}
                    </Card.Text>
                    <Card.Text className="fw-bold">
                        Brand:
                    </Card.Text>
                    <Card.Text>
                        {product.brand}
                    </Card.Text>
                    <Card.Text className="fw-bold">
                        Category:
                    </Card.Text>
                    <Card.Text>
                        {product.category}
                    </Card.Text>
                    <Card.Text className="fw-bold">
                        Description:
                    </Card.Text>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text className="fw-bold">
                        Status:
                    </Card.Text>
                    <Card.Text>
                        {product.status}
                    </Card.Text>
                    <Card.Text className="fw-bold">
                        Rating:
                    </Card.Text>
                    <Card.Text>
                        {product.rating}
                    </Card.Text>
                    <Card.Text className="fw-bold">
                        Reviews:
                    </Card.Text>
                    <Card.Text>
                        {product.numReviews}
                    </Card.Text>
                    <Card.Text className="fw-bold">
                        Published:
                    </Card.Text>
                    <Card.Text>
                        {product.createdAt.slice(0, 10)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>) : <div>no product selected</div>}
    </div>
}

export default ProductSelected;