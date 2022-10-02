import { Card, Table } from "react-bootstrap";

function BestUserTables({ title, users, field }) {

    return <Card className="p-3">
        <Card.Title  className="text-danger">{title}</Card.Title>
        <Table bordered className="text-primary">
            <thead>
                <th>#</th>
                <th>User</th>
                <th>{field}</th>
            </thead>
            <tbody>
                {users && users.map((user, idx) => <tr>
                    <td>{idx + 1}</td>
                    <td>{user.user}</td>
                    <td>{user[field]}</td>
                </tr>)}
            </tbody>
        </Table>
    </Card>
}

export default BestUserTables;