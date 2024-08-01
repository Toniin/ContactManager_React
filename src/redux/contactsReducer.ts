import {createSlice} from '@reduxjs/toolkit'
import {deleteContact, getContacts, renameContact} from "@/redux/actions/contact.action.ts";
import {Contact} from "@/models/contact.model.ts";

const initialState: Contact[] = []

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getContacts.fulfilled, (state, action) => {
            state.splice(0, state.length)
            const contacts: Contact[] = action.payload

            contacts.forEach(contact => {
                state.push(contact)
            })
        })

        builder.addCase(deleteContact.fulfilled, (state, action) => {
            console.log("Message success : ", action.payload)

            const newArray = state.filter(contact => contact.phoneNumber !== action.meta.arg)

            state.splice(0, state.length)

            newArray.forEach(contact => {
                state.push(contact)
            })
        })

        builder.addCase(renameContact.fulfilled, (state, action) => {
            const newArray = state.map(contact => {
                if (contact.phoneNumber === action.meta.arg.phoneNumber) {
                    return {
                        phoneNumber: contact.phoneNumber,
                        name: action.meta.arg.name
                    }
                }
                return contact
            })

            state.splice(0, state.length)

            newArray.forEach(contact => {
                state.push(contact)
            })
        })
    },
})

export default contactsSlice.reducer