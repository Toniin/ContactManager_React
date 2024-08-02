import {createAsyncThunk} from "@reduxjs/toolkit";
import {Contact} from "@/models/contact.model.ts";

export const addContact = createAsyncThunk('addContact', async (newContact: Contact) => {
    const optionsPostRequest = {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact)
    };
    const response = await fetch(`${import.meta.env.VITE_API_URL}/add`, optionsPostRequest)
    return response.json()
})

export const getContacts = createAsyncThunk('getContacts', async () => {
    const optionsGetRequest = {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }
    const response = await fetch(import.meta.env.VITE_API_URL, optionsGetRequest)
    return response.json()
})

export const getContact = createAsyncThunk('getContact', async (phoneNumber: number) => {
    const optionsGetRequest = {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/find/${phoneNumber}`, optionsGetRequest)
    return response.json()
})

export const deleteContact = createAsyncThunk('deleteContact', async (phoneNumber: number) => {
    const optionsDeleteRequest = {
        method: "DELETE",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/delete/${phoneNumber}`, optionsDeleteRequest)
    return response.text()
})

export const renameContact = createAsyncThunk('addContact', async (renamedContact: Contact) => {
    const optionsPutRequest = {
        method: 'PUT',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(renamedContact)
    };
    const response = await fetch(`${import.meta.env.VITE_API_URL}/update/${renamedContact.phoneNumber}`, optionsPutRequest)
    return response.json()
})