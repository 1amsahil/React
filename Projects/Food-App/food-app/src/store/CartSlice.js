import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name : "cart",
        initialState : [],
        reducers : 
        {
            AddItem : (state, action) => 
            {
                state.push( action.payload);
            },

            RemoveItem : (state, action) =>
            {
                console.log(action.payload);
                return state.filter((item) => item.id !== action.payload)
            }
        }
    }
)

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;