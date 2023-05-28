import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        user: "admin",
        token: ""
    },
    reducers: {
        addToken(state, action) {
            state.token = action.payload.token
        },
        rmToken(state, action) {
            state.token = ""
        },
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            });
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        addUser(state, action) {
            state.user = "Dima"
        },
        rmUser(state, action) {
            state.user = ""
        },
        setUserAdmin(state, action) {
            state.user = "admin"
        },
        setUserWorker(state, action) {
            state.user = "worker"
        },

    },
});

export const {addTodo, toggleComplete, removeTodo, addUser, rmUser, setUserAdmin, setUserWorker, addToken, rmToken} = todoSlice.actions;

export default todoSlice.reducer;
