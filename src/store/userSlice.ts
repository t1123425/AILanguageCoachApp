import { createSlice } from "@reduxjs/toolkit";
import  type {PayloadAction} from "@reduxjs/toolkit";
import { SafeUser } from "@/global";
export interface UserData{
    currentUser?:SafeUser | null;
}

const initialState:UserData = {
    currentUser:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state,action:PayloadAction<SafeUser>) => {
            state.currentUser = action.payload
        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;