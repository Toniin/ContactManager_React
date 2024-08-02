import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from "@/redux/contactsReducer.ts";
import isEditingReducer from "@/redux/isEditingReducer.ts";
import isSearchingReducer from "@/redux/isSearchingReducer.ts";
import userReducer from "@/redux/userReducer.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        contacts: contactsReducer,
        isEditing: isEditingReducer,
        isSearching: isSearchingReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch