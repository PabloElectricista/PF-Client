import { Card, Image } from 'react-bootstrap';

function Profile({user}) {

    return <>
        <Card className='text-center'>
                        <Card.Title>
                            {user.firstname}  {user.lastname}
                        </Card.Title>
                        <Card.Body>
                            <Image
                                src={user.picture}
                                alt={user.username}
                                className="card-img-top img-fluid rounded-circle m-auto w-50"

                            />
                            <p>Is Admin: {user.isAdmin ? "yes" : "no"}</p>
                            <p>Is Bloqued: {user.isBloked ? "yes" : "no"}</p>
                            <p>Country: {user.country}</p>
                            <p>Country: {user.state}</p>
                            <p>Country: {user.city}</p>
                            <p>Address: {user.address}</p>
                            <p>Address: {user.address}</p>
                        </Card.Body>
                    </Card>
    </>
}

export default Profile;