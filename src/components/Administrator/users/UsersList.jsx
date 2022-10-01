/* eslint-disable react-hooks/exhaustive-deps */
import { ListGroup } from 'react-bootstrap';

function UserList({users, setId}) {

    return <div>
        <ListGroup className="list-group px-2">
            {users && users.length > 0 ?
                users.map((user, idx) => <ListGroup.Item
                >
                    <a
                        key={idx}
                        href='#!'
                        className="d-flex flex-row justify-content-start"
                        onClick={() => setId(user._id)}
                    >
                        <img
                            src={user.picture}
                            alt={user.username}
                            className="img-fluid mr-4"
                            width="70"

                        />
                        <p>{`${user.username}`}</p>
                    </a>
                </ListGroup.Item>)
                : null}
        </ListGroup>
    </div>
}

export default UserList;