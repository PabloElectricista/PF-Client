import { createSlice } from '@reduxjs/toolkit';

export const usersSlices = createSlice({
    name: 'users',
    initialState: {
        allusers: [],
        user: {}
    },
    reducers: {
        getAllUsers(state, action){
            state.allusers = action.payload
        },
        getUserByEmail(state, actions){
            state.user = actions.payload
        },
        addNewUser(state, actions){
            state.user = actions.payload
        }
    }
})

export const { getAllUsers, getUserByEmail, addNewUser } = usersSlices.actions;
export default usersSlices.reducer
