import {createAsyncThunk} from "@reduxjs/toolkit";
import {Contact} from "@/models/contact.model.ts";
import {contactsAPI} from "@/lib/axios.ts";

export const addContact = createAsyncThunk(
    'addContact',
    (newContact: Contact) => {
        return contactsAPI.post("/add", JSON.stringify(newContact))
            .then(response => response.data)
            .catch(error => error.response.data);
    })

export const getContacts = createAsyncThunk(
    'getContacts',
    () => {
        return contactsAPI.get("")
            .then(response => response.data)
    })

export const getContact = createAsyncThunk(
    'getContact',
    (phoneNumber: number) => {
        return contactsAPI.get(`/find/${phoneNumber}`)
            .then(response => response.data)
            .catch(error => error.response.data);
    })

export const deleteContact = createAsyncThunk(
    'deleteContact',
    (phoneNumber: number) => {
        return contactsAPI.delete(`/delete/${phoneNumber}`)
            .then(response => response.data)
            .catch(error => error.response.data)
    })

export const renameContact = createAsyncThunk(
    'renameContact',
    (renamedContact: Contact) => {
        return contactsAPI.put(`/update/${renamedContact.phoneNumber}`, JSON.stringify(renamedContact))
            .then(response => response.data)
            .catch(error => error.response.data);
    })