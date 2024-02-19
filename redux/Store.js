import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

export default store=configureStore({
    reducer:{
        auth: Reducer,
        profil:Reducer
    }
})
 console.log("ett est ",store.getState())