import { Button, Table } from "react-bootstrap";

function OrdersList({ orders, setId }) {

    return <>
        <Table striped="columns" size="sm" hover>
            <thead>
                <th>
                    #
                </th>
                <th>
                    Id
                </th>
                <th>
                    Products sold
                </th>
                <th>
                    Total amount
                </th>
                <th>
                    Status order
                </th>
                <th>
                    Date
                </th>
                <th>
                    See details
                </th>
            </thead>
            <tbody>
                {
                    orders && orders.length > 0 ?
                    orders.map((order, idx) => <tr key={idx}>
                        <td>
                            {idx + 1}
                        </td>
                        <td>
                            {order.buyer ? order.buyer.username : null}
                        </td>
                        <td>
                            {order.products.length}
                        </td>
                        <td>
                            {order.total_amount}
                        </td>
                        <td>
                            {order.status}
                        </td>
                        <td>
                            {order.createdAt}
                        </td>
                        <td>
                            <Button
                                id={order._id}
                                size="sm"
                                variant="primary"
                                className="px-0"
                                onClick={() => setId(order._id)}
                            >
                                details
                            </Button>
                        </td>
                    </tr>) :
                    <div>Not Orders Found </div>
                }

            </tbody>
        </Table>
    </>
}

export default OrdersList;