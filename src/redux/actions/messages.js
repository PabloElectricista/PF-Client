import axios from "axios";
import { setmessages } from '../slices/messagesSlices'

export const sendcontact = (menssage) => {
    return function (dispatch) {
        axios.post("/contactus", menssage)
            .then(res => {dispatch(setmessages(res.data))})
            .catch(err => console.error(err))
    }
}
