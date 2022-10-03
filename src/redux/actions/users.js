import axios from "axios";
import { getAllUsers, getUserByEmail, addNewUser, updateUserData } from "../slices/usersSlices"


export const getUsers = (page) => {
    console.log("allusers");
    return function (dispatch) {
        axios(`/users?start=${page}&limit=6`, {
            headers: {
                'credential': localStorage.getItem('tkn')
            }
        })
            .then(res => {dispatch(getAllUsers(res.data))})
            .catch(err => console.error(err))
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
                    .catch(err => console.error(err))
                }
                else dispatch(getUserByEmail(data))
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

export const updateUser = (userdata) => async (dispatch) => {
    console.log(userdata);
    try {
        const res = await axios.put("/users/"+userdata._id, userdata, {
            headers: {
                'credential': localStorage.getItem('tkn')
            }
        })
        dispatch(updateUserData(res.data))
    } catch (error) {
        console.log(error);
    }
}
