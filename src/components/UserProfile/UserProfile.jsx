/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/actions/users'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import profile from "../../views/assets/profile.jpg"
import UpdateAcount from './UpdateAcount';
import ShowProfile from './ShowProfile';
import { getUserByEmail } from '../../redux/slices/usersSlices';

function UserProfile() {

    const { email } = useSelector(state => state.users.user)
    const initialstate = {
        email,
        firstName: " ",
        lastName: " ",
        phone: 0,
        identificationnumber: 0,
        address: " ",
        addressnumber: 0,
        floor: " ",
        department: " ",
        zipcode: 0,
        city: " ",
        state: " ",
        country: " "
    }

    const [validated, setValidated] = useState(false);
    const [userdata, setUserdata] = useState(initialstate);
    const dispatch = useDispatch()
    const [tkn, setTkn] = useState("")
    const dark = useSelector(state => state.theme.theme)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        setTkn(localStorage.getItem('tkn'))
        dispatch(getUserByEmail(
            localStorage.getItem("email"),
            localStorage.getItem("tkn")
        ))
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        dispatch(updateUser(userdata, tkn));
        setTimeout(() => setUserdata(initialstate), 1000)
        setValidated(true);
    };

    const handlechange = e => {
        e.preventDefault();
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value
        })
    }

    const containerStyle = {
        backgroundColor: dark ? "black" : "white",
        marginTop: "7rem",
        paddingTop: "5rem"
    }
    const Profile = () => <div
        className="fw-bold text-primary"
    >
        Profile Data <i className="material-icons">person_filled</i>
    </div>
    const Update = () => <div className="fw-bold text-primary">
        Update Account <i className="material-icons">app_registration</i>
    </div>

    return (
        <Container style={containerStyle}>
            <Card.Title className="fw-bold text-primary text-center">
                <BootstrapSwitchButton
                    checked={update}
                    onstyle="outline-secondary"
                    offstyle="outline-secondary"
                    onChange={(checked) => (setUpdate(checked))}
                    onlabel={<Update />}
                    offlabel={<Profile />}
                    width={320} height={75}

                />
            </Card.Title>
            <Row className='mb-3'>
                <Col xs="8">
                    {update ? <UpdateAcount
                        handlechange={handlechange}
                        handleSubmit={handleSubmit}
                        userdata={userdata}
                        validated={validated}
                    /> :
                        <ShowProfile />}
                </Col>
                <Col xs="1">
                    <br></br>
                    <img src={profile} alt="figure" width="350px" />
                </Col>
            </Row>
        </Container >
    );
}

export default UserProfile;
