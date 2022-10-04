import { Card, Table } from "react-bootstrap";

function BestSellersTable({ products }) {

    return <Card
        style={{ marginBottom: "20px", paddingLefth: "10px", paddingRight: "10px" }}
        border="primary"
    >
        <Card.Title className="text-danger text-center">BestSellers</Card.Title >
        <Table bordered className="text-primary mx-2">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Products</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {products && products.map((product, idx) => <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{product.name}</td>
                    <td className="text-success">{product.quantity}</td>
                </tr>)}
            </tbody>
        </Table>
    </Card>
}

export default BestSellersTable;