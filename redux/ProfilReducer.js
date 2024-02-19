import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    patient:{id:1,name:'hassini',prenom:'yassine',nombreOfConsultations:2,simptope:['skhana','rwah','skhfa']}
}
const ProfilSlice=createSlice({
    
    name:'profil',
    initialState:initialState.patient,
    reducer:{
        ajouterSimptope:()=>{
            state.simptope.push(state.payload)
        }

}})

export default ProfilSlice.reducer;
export const {ajouterSimptope} =ProfilSlice.actions;