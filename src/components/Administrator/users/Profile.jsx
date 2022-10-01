import { Card, Image } from 'react-bootstrap';

function Profile({user}) {

    let index = 0 
    
    return <> 
        {user ? (<Card className='text-center'>
            <Card.Title>
                {user.firstname}  {user.lastname}
            </Card.Title>
            <Card.Body>
                <Image
                    src={user.picture}
                    alt="user selected"
                    className="rounded-circle m-auto w-50"

                />
                <p key={index++}>Is Admin: {user.isAdmin ? "yes" : "no"}</p>
                <p key={index++}>Is Bloqued: {user.isBloked ? "yes" : "no"}</p>
                <p key={index++}>Address: {user.address} {user.addressnumber}</p>
                <p key={index++}>City: {user.city}</p>
                <p key={index++}>state: {user.state}</p>
                <p key={index++}>Country: {user.country}</p>
            </Card.Body>
        </Card>) : (
        <div>No User selected</div>
      )}
    </>
}

export default Profile;