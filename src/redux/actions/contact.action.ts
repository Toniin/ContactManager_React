import {createAsyncThunk} from "@reduxjs/toolkit";
import {Contact} from "@/models/contact.model.ts";
import {contactsAPI} from "@/lib/axios.ts";

export const addContact = createAsyncThunk('addContact', async (newContact: Contact) => {
    return await contactsAPI.post("/add", JSON.stringify(newContact))
        .then(response => response.data)
        .catch(error => error.response.data);
})

export const getContacts = createAsyncThunk('getContacts', async () => {
    const response = await contactsAPI.get("")
    return response.data
})

export const getContact = createAsyncThunk('getContact', async (phoneNumber: number) => {
    return contactsAPI.get(`/find/${phoneNumber}`)
        .then(response => response.data)
        .catch(error => error.response.data);
})

export const deleteContact = createAsyncThunk('deleteContact', async (phoneNumber: number) => {
    return await contactsAPI.delete(`/delete/${phoneNumber}`)
        .then(response => response.data)
        .catch(error => error.response.data)
})

export const renameContact = createAsyncThunk('renameContact', async (renamedContact: Contact) => {
    return contactsAPI.put(`/update/${renamedContact.phoneNumber}`, JSON.stringify(renamedContact))
        .then(response => response.data)
        .catch(error => error.response.data);
})