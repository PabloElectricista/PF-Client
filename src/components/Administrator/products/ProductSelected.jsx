import { Card, Image } from "react-bootstrap";

function ProductSelected({ product }) {

    return <div className="container mt-3 me-3 pe-3 pt-2">
        {product ? (
            <Card className="text-center">
                <Card.Title className="mx-auto text-danger">Product selected</Card.Title>
                <Card.Body className="mx-auto">
                    <Image
                        src={product.images[0]}
                        alt="product"
                        width="200"
                    />
                    <Card.Text className="fw-bold text-primary">
                        ID:
                    </Card.Text>
                    <Card.Text className="text-success">
                        {product._id}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary">
                        Name:
                    </Card.Text>
                    <Card.Text className="text-success">
                        {product.name}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary">
                        Brand:
                    </Card.Text>
                    <Card.Text className="text-success">
                        {product.brand}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary">
                        Category:
                    </Card.Text>
                    <Card.Text className="text-success">
                        {product.category}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary">
                        Description:
                    </Card.Text>
                    <Card.Text className="text-success">
                        {product.description}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary">
                        Status:
                    </Card.Text>
                    <Card.Text className="text-success">
                        {product.status}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary">
                        Rating:
                    </Card.Text>
                    <Card.Text className="text-success">
                        {product.rating}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary">
                        Reviews:
                    </Card.Text>
                    <Card.Text className="text-success">
                        {product.numReviews}
                    </Card.Text>
                    <Card.Text className="fw-bold text-primary">
                        Published:
                    </Card.Text>
                    <Card.Text>
                        {product.createdAt.slice(0, 10)}
                    </Card.Text>
                </Card.Body>
            </Card>
        ) : <div>no product selected</div>}
    </div>
}

export default ProductSelected;