import { Card, Image } from 'react-bootstrap';

function Profile({user}) {

    let index = 0 
    
    return <div className='container me-3'> 
        {user ? (<Card className='text-center'>
            <Card.Title>
                {user.firstname}  {user.lastname}
            </Card.Title>
            <Card.Body>
                <Image
                    src={user.picture}
                    alt="user selected"
                    className="rounded-circle w-40"

                />
                <p key={index++} className="text-danger" >Is Admin: {user.isAdmin ? "yes" : "no"}</p>
                <p key={index++} className="text-danger">Is Bloqued: {user.isBloked ? "yes" : "no"}</p>
                <p key={index++} className="text-danger">Address: {user.address} {user.addressnumber}</p>
                <p key={index++} className="text-danger">City: {user.city}</p>
                <p key={index++} className="text-danger">state: {user.state}</p>
                <p key={index++} className="text-danger">Country: {user.country}</p>
            </Card.Body>
        </Card>) : (
        <div>No User selected</div>
      )}
    </div>
}

export default Profile;