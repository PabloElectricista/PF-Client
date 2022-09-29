import { useDispatch } from 'react-redux';
import { getByEmail } from '../../redux/actions/users'
import { ListGroup } from 'react-bootstrap';
import {  Col, Row } from 'react-bootstrap';

function UserList({allusers}) {

    const tkn = localStorage.getItem('tkn')
    const dispatch = useDispatch()

    return <div>
        <ListGroup className="list-group px-2">
                    {allusers && allusers.length > 0 ?
                        allusers.map((user, idx) => <ListGroup.Item
                            
                        >
                            <a
                                href='#!'
                                style={{ textDecoration: "none" }}
                                onClick={() => dispatch(getByEmail(user, tkn))}
                            >
                                <Row>
                                    <Col>
                                        <p>{user.username}</p>
                                    </Col>
                                    <Col>
                                        <p>{user.email}</p>
                                    </Col>
                                </Row>
                            </a>
                        </ListGroup.Item>)
                        : null}
                </ListGroup>
    </div>
}

export default UserList;