import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from "@/redux/contactsReducer.ts";
import isEditingReducer from "@/redux/isEditingReducer.ts";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        isEditing: isEditingReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch