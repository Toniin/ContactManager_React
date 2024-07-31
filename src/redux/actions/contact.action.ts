import {createAsyncThunk} from "@reduxjs/toolkit";

const optionsGetRequest = {
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
}

const optionsDeleteRequest = {
    method: "DELETE",
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
}

export const getContacts = createAsyncThunk('getContacts', async () => {
    const response = await fetch(import.meta.env.VITE_API_URL, optionsGetRequest)
    return response.json()
})

export const deleteContact = createAsyncThunk('deleteContact', async (phoneNumber: number) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/delete/${phoneNumber}`, optionsDeleteRequest)
    return response.text()
})