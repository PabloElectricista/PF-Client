import { Card, Table } from "react-bootstrap";

function BestSellersTable({ products }) {

    return <Card className="mx-0">
        <Card.Title className="text-danger">BestSellers</Card.Title >
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
                    <td>{product.quantity}</td>
                </tr>)}
            </tbody>
        </Table>
    </Card>
}

export default BestSellersTable;