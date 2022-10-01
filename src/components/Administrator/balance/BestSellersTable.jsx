import { Card, Table } from "react-bootstrap";

function BestSellersTable({products}) {

    return <Card className="p-3">
    <Card.Title   className="text-danger">BestSellers</Card.Title >
    <Table bordered className="text-primary">
        <thead>
            <th>#</th>
            <th>Products</th>
            <th>Quantity</th>
        </thead>
        <tbody>
            {products && products.map((product, idx) => <tr>
                <td>{idx + 1}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
            </tr>)}
        </tbody>
    </Table>
</Card>
}

export default BestSellersTable;