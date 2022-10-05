import axios from "axios";
import { setmessages } from '../slices/messagesSlices'
import { toast } from "react-toastify";

export const sendcontact = (message) => {

    return function (dispatch) {
        axios.post("/mail/send-claim", message)
            .then(({data}) => dispatch(setmessages(data)))
            .catch(error => toast(`${error.message}`, { type: "error" }))
    }
}
