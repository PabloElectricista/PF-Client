import { Table } from "react-bootstrap";

function OrdersList({ orders, setId, id }) {

    return <>
        <Table bordered size="sm" hover>
            <thead>
                <th></th>
                <th>Id</th>
                <th>Products sold</th>
                <th>Total amount</th>
                <th>Status order</th>
                <th>Date</th>
            </thead>
            <tbody>
                {
                    orders && orders.length > 0 ?
                    orders.map((order, idx) => <tr key={idx}
                    onClick={() => setId(order._id)}
                    className={order._id === id ? "table-active" : ""}
                    >
                        <td>{idx + 1}</td>
                        <td>{order.user ? order.user.username : null}</td>
                        <td>{order.orderItems.length}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.status}</td>
                        <td><div>{order.createdAt.slice(0,10)}</div>
                        <div>{order.createdAt.slice(11,19)}</div></td>
                    </tr>) :
                    <div>Not Orders Found </div>
                }
            </tbody>
        </Table>
    </>
}

export default OrdersList;