/* global google */
import { Button } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { postUser } from "../../redux/actions/users"
import { useDispatch } from "react-redux";

function Signin({ log, setLog }) {

    const dispatch = useDispatch()

    const handleCredentialResponse = ({ credential }) => {
        const responsePayload = jwt_decode(credential);
        if(responsePayload.given_name) {
            dispatch(postUser({credential}))
            toast("Login Ok", { type: "success" })
            setLog(responsePayload.email_verified)
            localStorage.setItem("islogged", "true")
            localStorage.setItem("tkn", credential)
            localStorage.setItem("name", responsePayload.given_name)
            localStorage.setItem("email", responsePayload.email)
            localStorage.setItem("picture", responsePayload.picture)
        }
    };

    const login = () => {
        google.accounts.id.initialize({
            client_id: '837241183537-u5uki0e6odl7v0p8ilkst5e2j3ml9u4p.apps.googleusercontent.com',
            callback: handleCredentialResponse
        });
        google.accounts.id.prompt(notification => {
            if (notification.isSkippedMoment()) {
                toast("Login skipped", { type: "warning" });
            }
        });
    };

    const logout = () => {
        google.accounts.id.disableAutoSelect()
        toast("Logout done", { type: "info" })
        setLog(false);
        localStorage.setItem("islogged", "false")
    }

    return <>
        {!log ?
            <Button
                
                size="sm"
                variant="outline-success"
                className="mx-2"
                onClick={login}
            >
                <i className="material-icons">login</i>
                Login
            </Button>
            :
            <Button
                
                size="sm"
                variant="outline-danger"
                className="g_id_signout mx-2"
                onClick={logout}
            >
                <i className="material-icons">logout</i>
                Logout
            </Button>
        }
    </>
}

export default Signin;
