import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World",
        completed: false
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // In Redux you get access of two things inside the method of reducers and that is state and action. 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {
    addTodo,
    removeTodo
} = todoSlice.actions

export default todoSlice.reducer