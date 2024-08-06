import {createAsyncThunk} from "@reduxjs/toolkit";
import {SignInFormUser, SignUpFormUser} from "@/models/user.model.ts";
import {contactsAPI} from "@/lib/axios.ts";

export const signUp = createAsyncThunk('signUp', async (newUser: SignUpFormUser) => {
    return await contactsAPI.post("/auth/register", JSON.stringify(newUser))
        .then(response => response.data)
        .catch(error => error.response.data);
})

export const signIn = createAsyncThunk('signIn', async (user: SignInFormUser) => {
    return await contactsAPI.post("/auth/login", JSON.stringify(user))
        .then(response => response.data)
        .catch(error => error.response.data);
})