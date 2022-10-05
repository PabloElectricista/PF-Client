import axios from "axios";
import { getAllUsers, getUserByEmail, addNewUser, updateUserData } from "../slices/usersSlices"
import { toast } from "react-toastify";

export const getUsers = (page) => {
    return function (dispatch) {
        axios(`/users?start=${page}&limit=6`, {
            headers: {
                'credential': localStorage.getItem('tkn')
            }
        })
            .then(res => {dispatch(getAllUsers(res.data))})
            .catch(error => toast(`${error.message}`, { type: "error" }))
    }
}

export const getByEmail = (user) => {
    return function (dispatch) {
        axios("/users/byEmail/" + user.email, {
            headers: {
                'credential': localStorage.getItem('tkn')
            }
        })
            .then(({data}) => {
                if (data && data.length === 0) {
                    axios.post("/users", user)
                    .then(({data})=>{
                        dispatch(addNewUser(data))                
                    })
                    .catch(error => toast(`${error.message}`, { type: "error" }))
                }
                else dispatch(getUserByEmail(data))
            })
            .catch(error => toast(`${error.message}`, { type: "error" }))
    }
}

export const postUser = (newuser) => async (dispatch) => {
    try {
        const res = await axios.post("/users", newuser)
        dispatch(addNewUser(res.data))
    } catch (error) {
        toast(`${error.message}`, { type: "error" });
    }
}

export const updateUser = (userdata) => async (dispatch) => {
    try {
        const res = await axios.put("/users/"+userdata._id, userdata, {
            headers: {
                'credential': localStorage.getItem('tkn')
            }
        })
        dispatch(updateUserData(res.data))
    } catch (error) {
        toast(`${error.message}`, { type: "error" });
    }
}
