/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'react-bootstrap';

function UserList({ users, setId, id }) {

    return <div className="w-100 m-3 p-3">
            {
                users && users.length > 0 ?
                (<Table bordered hover className="text-primary ">
                <thead className="text-center">
                    <tr>
                        <th className="text-center" colSpan={4}>Users List</th>
                    </tr>
                </thead>
                <tbody>
                    {
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
                                    width="200"
                                />
                            </td>
                            <td>{user.username}</td>
                            <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                        </tr>)
                    }
                </tbody>
                </Table>)
                : <div>Not Users Found </div>
            }
        </div>
}

export default UserList;
