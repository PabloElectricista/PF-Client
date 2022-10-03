import { Table } from "react-bootstrap";

function OrdersList({ orders, setId, id }) {

    return <div className="container p-3 m-3">
        {
            orders && orders.length > 0 ?
                (<Table bordered size="sm" hover className="text-primary ">
                    <thead className="text-center text-danger">
                        <tr>
                            <th></th>
                            <th>Username</th>
                            <th>Purchases</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, idx) => <tr key={idx}
                                onClick={() => setId(order._id)}
                                className={order._id === id ? "table-active" : ""}
                            >
                                <td className="text-center">{idx + 1}</td>
                                <td>{order.user ? order.user.username : null}</td>
                                <td className="text-center text-success">{order.orderItems.length}</td>
                                <td className="text-center text-success">{order.totalPrice}</td>
                                <td className="text-center text-success">{order.createdAt.slice(0, 10)} {order.createdAt.slice(11, 19)}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>)
                : <div>Not Orders Found </div>
        }
    </div>
}

export default OrdersList;
