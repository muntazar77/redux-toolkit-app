import { configureStore } from "@reduxjs/toolkit";
// import { counter } from "./cartSlice";
import cartSlice from "./cartSlice"

const store = configureStore({

    reducer:{
        // Add your reducers here
      cart:cartSlice.reducer,
    }
})

export default store 