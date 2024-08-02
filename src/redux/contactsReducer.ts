import {createSlice} from '@reduxjs/toolkit'
import {getContact, getContacts} from "@/redux/actions/contact.action.ts";
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

        builder.addCase(getContact.fulfilled, (state, action) => {
            const arrayFiltered = state.filter(contact => contact.phoneNumber === action.meta.arg)
            const contactFiltered: Contact = arrayFiltered[0]
            const contactFound: Contact = action.payload

            if (contactFiltered.name !== contactFound.name) {
                state.splice(0, state.length)
                state.push(contactFound)
            } else {
                state.splice(0, state.length)
                state.push(contactFiltered)
            }
        })
    },
})

export default contactsSlice.reducer