import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{ 
        
        addTodo: (state,action)=>{
        
            const newTodo={
                id:action.payload.id,
                title: action.payload.title,
                completed: false,
                description: action.payload.description
            };
            state.push(newTodo);
        },

        toggleComplete:(state, action)=>{
            
            const index= state.findIndex(
                (todo)=> todo.id === action.payload.id
                );
            state[index].completed=action.payload.completed;
        },
        
        deleteTodo:(state,action)=>{
            return state.filter((todo)=>todo.id!== action.payload.id)
        },
    
        }
});

export const {addTodo, toggleComplete, deleteTodo} = Slice.actions;
export default Slice.reducer;
