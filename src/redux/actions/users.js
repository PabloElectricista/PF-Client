import axios from "axios";
import { getAllUsers, getUserByEmail, addNewUser } from "../slices/usersSlices"


export const getUsers = (tkn) => {
    return function (dispatch) {
        axios("/users", {
            headers: {
                'x-access-token': tkn
            }
        })
            .then(res => {dispatch(getAllUsers(res.data))})
            .catch(err => console.error(err))
    }
}

export const getByEmail = (user/* , tkn */) => {
    return function (dispatch) {
        axios("/users/byEmail/" + user.email, {
            headers: {
                'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWU2Mjk0M2RmMzBlNTQxOGJiMzVhNiIsImlhdCI6MTY2MzY1NTY4OSwiZXhwIjoxNjYzNzQyMDg5fQ.fJAD8txqmjl7ta8lveKvj9HI_Mv36Oh3nQMs5QnALLY"
            }
        })
            .then(res => {
                if (res.data && res.data.length === 0) {
                    axios.post("/users", user)
                    .then((res)=>{
                        dispatch(addNewUser(res.data))                
                    })
                    .catch(err => console.error(err))
                }
                else dispatch(getUserByEmail(res.data[0]))
            })
            .catch(err => console.error(err))
    }
}

export const postUser = (newuser) => async (dispatch) => {
    try {
        const res = await axios.post("/users", newuser)
        dispatch(addNewUser(res.data))
    } catch (error) {
        console.log(error);
    }
}
