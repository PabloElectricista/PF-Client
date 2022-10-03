import { useEffect, useState } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import axios from 'axios'
import { toast } from "react-toastify";

function Profile({ user, getUsers }) {

    let index = 0
    const [isAdmin, setIsAdmin] = useState(false)
    const [isBlocked, setIsBlocked] = useState(false)

    useEffect(() => {
        if (user) {
            setIsAdmin(user.isAdmin)
            setIsBlocked(user.isBlocked)
        }
    }, [user])

    const handleAdmin = (check) => {
        if (window.confirm("Please, confirm change state")) {
            axios.put(`/users/${user._id}`, {
                "isAdmin": check
            }, {
                headers: { credential: localStorage.getItem("tkn") }
            }).then(({ data }) => {
                getUsers()
                setIsAdmin(data.isAdmin)
                toast(`user set ${data.isAdmin ? "to" : "not"} admin`, { type: "success", autoClose: 1000 });
            })
                .catch((error) => toast(error, { type: "danger" }))
        }
    }

    const handleBlocked = (check) => {
        if (window.confirm("Please, confirm change state")) {
            axios.put(`/users/${user._id}`, {
                "isBlocked": check
            }, {
                headers: { credential: localStorage.getItem("tkn") }
            }).then(({ data }) => {
                getUsers()
                setIsBlocked(data.isBlocked)
                toast(`user set ${data.isBlocked ? "to" : "not "} blocked`, { type: "success", autoClose: 1000 });
            })
                .catch((error) => toast(error, { type: "danger" }))
        }
    }

    return <div className='container p-3 me-3 mt-3'>
        {user ? (<Card className='text-center'>
            <Card.Title className="text-danger fw-bold p-2">
                {user.firstName}  {user.lastName}
            </Card.Title>
            <Card.Body>
                <Image
                    src={user.picture}
                    alt="user selected"
                    className="rounded-circle w-40"

                />
                <Row>
                    <Col>
                        <div className='mb-4'>
                            <p key={index++} className="text-primary">Is Admin:</p>
                        </div>
                        <div className='mb-4'>
                            <p key={index++} className="text-primary">Is Bloqued:</p>
                        </div>
                        <div className='mb-2'>
                            <p key={index++} className="text-primary">Address:</p>
                        </div>
                        <div className='mb-2'>
                            <p key={index++} className="text-primary">City:</p>
                        </div>
                        <div className='mb-2'>
                            <p key={index++} className="text-primary">state:</p>
                        </div>
                        <div className='mb-2'>
                            <p key={index++} className="text-primary">Country:</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='mb-2'>
                            <BootstrapSwitchButton
                                name="isAdmin"
                                checked={isAdmin}
                                onstyle="success"
                                offstyle="danger"
                                onChange={handleAdmin}
                                onlabel="yes"
                                offlabel="no"
                                width={75}
                            />
                        </div>
                        <div className='mb-2'>
                            <BootstrapSwitchButton
                                name="isBlocked"
                                checked={isBlocked}
                                onstyle="success"
                                offstyle="danger"
                                onChange={handleBlocked}
                                onlabel="yes"
                                offlabel="no"
                                width={75}
                            />
                        </div>
                        <div className='mb-2'>
                            <p key={index++} className="text-success">
                                {user.address} {user.addressnumber}
                            </p>
                        </div>
                        <div className='mb-2'>
                            <p key={index++} className="text-success">
                                {user.city}
                            </p>
                        </div>
                        <div className='mb-2'>
                            <p key={index++} className="text-success">
                                {user.state}
                            </p>
                        </div>
                        <div className='mb-2'>
                            <p key={index++} className="text-success">
                                {user.country}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>) : (
            <div>No User selected</div>
        )}
    </div>
}

export default Profile;