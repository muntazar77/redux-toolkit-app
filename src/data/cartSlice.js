import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",
    initialState:{
        cartProductIds:[]
    },
    reducers:{
        addToCart:(state , action)=>{
            state.cartProductIds =[action.payload, ...state.cartProductIds]
        },
        removeFromCart:(state, action)=>{
            const index =state.cartProductIds.indexOf(action.payload)
            state.cartProductIds.splice(index,1)
        },
        clearAllItems:(state)=>{
            state.cartProductIds = []
        }
    }
})

export default cartSlice