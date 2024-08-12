import {createSlice} from '@reduxjs/toolkit'
import {getContact, getContacts} from "@/redux/actions/contact.action.ts";
import {Contact} from "@/models/contact.model.ts";
import {phoneFormatInternational_FR_fr} from "@/lib/phone.validator.ts";

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
            if (action.payload.isError) {
                throw new Error(action.payload.message)
            }

            const arrayFiltered = state.filter(contact => phoneFormatInternational_FR_fr(contact.phoneNumber) === action.meta.arg)
            const contactFiltered: Contact = arrayFiltered[0]
            const contactFound: Contact = action.payload

            state.splice(0, state.length)
            if (contactFiltered.name !== contactFound.name) {
                state.push(contactFound)
            } else {
                state.push(contactFiltered)
            }
        })
    },
})

export default contactsSlice.reducer