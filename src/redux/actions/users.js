import axios from "axios";
import { getAllUsers, getUserByEmail, addNewUser, updateUserData } from "../slices/usersSlices"


export const getUsers = (page, tkn) => {
    console.log("allusers");
    return function (dispatch) {
        axios(`/users?start=${page}&limit=6`, {
            headers: {
                'credential': tkn
            }
        })
            .then(res => {dispatch(getAllUsers(res.data))})
            .catch(err => console.error(err))
    }
}

export const getByEmail = (user, tkn) => {
    return function (dispatch) {
        axios("/users/byEmail/" + user.email, {
            headers: {
                'credential': tkn
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

export const updateUser = (userdata, tkn) => async (dispatch) => {
    console.log(userdata);
    try {
        const res = await axios.put("/users", userdata, {
            headers: {
                'credential': tkn
            }
        })
        dispatch(updateUserData(res.data))
    } catch (error) {
        console.log(error);
    }
}
