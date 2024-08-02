import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "@/models/user.model.ts";

export const signUp = createAsyncThunk('addContact', async (newUser: User) => {
    const optionsPostRequest = {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, optionsPostRequest)
    return response.json()
})