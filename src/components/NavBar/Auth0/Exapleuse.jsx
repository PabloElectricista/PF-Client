import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import { useAuth0 } from "@auth0/auth0-react";

function Exampleuse() {

    const { isAuthenticated } = useAuth0();

    return <div>
        { isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
}

export default Exampleuse