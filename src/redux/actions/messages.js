import axios from "axios";
import { setmessages } from '../slices/messagesSlices'

export const sendcontact = (menssage) => {

    return function (dispatch) {
        axios.post("/mail/send-claim", menssage)
            .then(res => {
                console.log(res);
                dispatch(setmessages(res.data))
            })
            .catch(err => console.error(err))
    }
}
