import axios from "axios";
import { getAllUsers, getUserByEmail } from "../slices/productsSlices"

export const getUsers = (tkn) => {
    return function (dispatch) {
        axios("/users", {
            headers: {
              'x-access-token': tkn
            }
          })
            .then(res => dispatch(getAllUsers(res.data)))
            .catch(err => console.error(err))
    }
}

export const getByEmail = (email, tkn) => {
    return function (dispatch) {
        axios("/users" + email, {
            headers: {
              'x-access-token': tkn
            }
          })
            .then(res => dispatch(getUserByEmail(res.data)))
            .catch(err => console.error(err))
    }
}
