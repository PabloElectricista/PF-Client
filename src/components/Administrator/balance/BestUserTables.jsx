import { Card, Table } from "react-bootstrap";

function BestUserTables({ title, users, field }) {

    return <Card
        border="primary"
        style={{ marginBottom: "20px", paddingLefth: "10px", paddingRight: "10px" }}
    >
        <Card.Title className="text-danger text-center">{title}</Card.Title>
        <Table bordered className="text-primary">
            <thead>
                <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>{field}</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map((user, idx) => <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{user.user}</td>
                    <td className="text-success">{user[`total${field}`]}</td>
                </tr>)}
            </tbody>
        </Table>
    </Card>
}

export default BestUserTables;