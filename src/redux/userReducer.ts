import {createSlice} from '@reduxjs/toolkit'
import {User} from "@/models/user.model.ts";
import {signUp} from "@/redux/actions/user.action.ts";

const initialState: User = {
    username: "",
    role: "USER"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, action) => {
            if (action.payload.isExists) {
                throw new Error(action.payload.message)
            }

            const newUser: User = action.payload

            state.username = newUser.username
            state.role = newUser.role
        })
    },
})

export default userSlice.reducer