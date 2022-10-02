/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row, Stack, Pagination } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUsers } from '../../redux/actions/users'
import Profile from './Profile';
import UserList from './UsersList';
import axios from 'axios';

function AllUsers() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [count, setCount] = useState(null)
    const [pages, setPages] = useState([1])
    const [current, setCurrent] = useState(1)
    const [id, setId] = useState(null)

    useEffect(() => {
        if (users && users.length === 0)
            getUsers()
    }, [])

    const getUsers = () => {
        axios(`/users?start=0`, {
            headers: {
                credential: localStorage.getItem('tkn')
            }
        })
            .then(({ data }) => {
                setUsers(data.users)
                setCount(data.count)
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        if (count) {
            const maxpages = Math.ceil(count / 20);
            var numbers = []
            for (let i = 1; i <= maxpages; i++) {
                numbers.push(i);
            }
            console.log(maxpages);
            setPages(numbers)
            let items = [];
            for (let number = 1; number <= maxpages; number++) {
                items.push(

                );
            }
        }
    }, [count])

    useEffect(() => {
        let selected = users.find(user => user._id === id)
        setUser(selected)
    }, [id])

    return <div>
        <Container className='m-3 p-3' >
            <Row>
                <Col md={1}>
                    <Pagination size="sm">
                        <Stack gap={1}>
                            {pages.map((page, i) => <>
                                <Pagination.Item
                                    key={page}
                                    active={page === current}
                                    onClick={() => {
                                        setCurrent(page)
                                        getUsers(page - 1)
                                    }}
                                >{page}
                                </Pagination.Item>
                            </>)}
                        </Stack>
                    </Pagination>
                </Col>
                <Col md={7}>
                    <UserList users={users} setId={setId} id={id} />
                </Col>
                <Col md={4}>
                    <Profile user={user} />
                </Col>
            </Row>

        </Container>
    </div>
}

export default AllUsers;