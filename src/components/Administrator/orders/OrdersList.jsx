import { Table } from "react-bootstrap";

function OrdersList({ orders, setId, id }) {

    return <>
        <div className="p-2 m-5 w-auto">
            <Table bordered size="sm" hover className="text-primary ">
                <thead className="text-center">
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Products sold</th>
                        <th>Total amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.length > 0 ?
                            orders.map((order, idx) => <tr key={idx}
                                onClick={() => setId(order._id)}
                                className={order._id === id ? "table-active" : ""}
                            >
                                <td className="text-center">{idx + 1}</td>
                                <td>{order.user ? order.user.username : null}</td>
                                <td className="text-center">{order.orderItems.length}</td>
                                <td className="text-center">{order.totalPrice}</td>
                                <td className="text-center">{order.createdAt.slice(0, 10)} {order.createdAt.slice(11, 19)}</td>
                            </tr>) :
                            <div>Not Orders Found </div>
                    }
                </tbody>
            </Table>
        </div>
    </>
}

export default OrdersList;