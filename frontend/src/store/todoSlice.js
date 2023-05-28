import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        user: "",
        token: ""
    },
    reducers: {
        addToken(state, action) {
            state.token = action.payload.token
        },
        rmToken(state, action) {
            state.token = ""
        },
        rmUser(state, action) {
            state.user = ""
        },
        setUserAdmin(state, action) {
            state.user = "hr"
        },
        setUserWorker(state, action) {
            state.user = "user"
        },
        setUser(state, action) {
            state.user = action.payload.user
        },

    },
});

export const {rmUser, setUserAdmin, setUserWorker, addToken, rmToken, setUser} = todoSlice.actions;

export default todoSlice.reducer;
