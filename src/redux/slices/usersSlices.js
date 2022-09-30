import { createSlice } from '@reduxjs/toolkit';

export const usersSlices = createSlice({
    name: 'users',
    initialState: {
        allusers: [],
        user: {},
        userselected: {}
    },
    reducers: {
        getAllUsers(state, action){
            state.allusers = action.payload
        },
        getUserByEmail(state, actions){
            state.userselected = actions.payload
        },
        addNewUser(state, actions){
            state.user = actions.payload
        },
        updateUserData(state, actions){
            state.user = actions.payload
        }
    }
})

export const { getAllUsers, getUserByEmail, addNewUser, updateUserData } = usersSlices.actions;
export default usersSlices.reducer
