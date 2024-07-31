import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from "@/redux/contactsReducer.ts";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch