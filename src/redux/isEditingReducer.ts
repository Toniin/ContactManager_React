import {createSlice} from '@reduxjs/toolkit'

export interface isEditingState {
    value: boolean,
    phoneNumber: number
}

const initialState: isEditingState = {
    value: false,
    phoneNumber: 0,
}

export const isEditingSlice = createSlice({
    name: 'isEdit',
    initialState,
    reducers: {
        isEditing: (state, action) => {
            state.value = true
            state.phoneNumber = action.payload
        },
        isNotEditing: state => {
            state.value = false
            state.phoneNumber = 0
        },

    }
})

export const {
    isEditing,
    isNotEditing
} = isEditingSlice.actions

export default isEditingSlice.reducer