/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'react-bootstrap';

function UserList({ users, setId, id }) {

    return <>
        <div className="w-100 m-5" width="22rem">
            <Table bordered hover className="text-primary ">
                <thead className="text-center">
                    <th></th>
                    <th className="text-center" colSpan={2}>Users List</th>
                </thead>
                <tbody>
                    {users && users.length > 0 ?
                        users.map((user, idx) => <tr key={idx}
                            onClick={() => setId(user._id)}
                            className={user._id === id ? "table-active" : ""}
                        >
                            <td className="text-center">{idx + 1}</td>
                            <td>
                                <img
                                    src={user.picture}
                                    alt={user.username}
                                    className="img-fluid mr-4"
                                    width="70"
                                />
                            </td>
                            <td>{user.username}</td>
                        </tr>)
                        : <div>Not Users Found </div>}
                </tbody>
            </Table>
        </div>
    </>
}

export default UserList;