import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  patient:{id:1,name:"hassini",prenom:'yassine',nombreOfConsultations:2},
  simptote:["Fièvre","eeMaux de têteeee","Fatigue","Frissons","Douleurs musculaires"]
 
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
 
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
