/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/users'
import Profile from './Profile';
import UserList from './UsersList';

function AllUsers() {

    const tkn = localStorage.getItem('tkn')
    const dispatch = useDispatch()
    const { allusers,  } = useSelector(state => state.users)
    const user = useSelector(state => state.users.userselected)

    useEffect(() => {
        dispatch(getUsers(tkn))
    }, [])

    useEffect(() => {
        console.log(user);
    }, [ user])

    return <Container className='p-2 m-3' >
        <Row>
            <Col  md={5}>
                <UserList allusers={allusers} />
            </Col>
            <Col  md={5}>
                {user && user.picture ?
                    <Profile user={user} extended={true}/>
                    : <span>No selected user</span>}
            </Col>
        </Row>

    </Container>
}

export default AllUsers;