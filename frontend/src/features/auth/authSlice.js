import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { reset } from 'colors'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: '',
    initialState,
    reducers : {
        reset: (state) => {
            state.isError = false,
            state.isSuccess = false,
            state.isLoading = false,
            state.message = ''
        }
    },
    extraReducers: () => {}
})


export const {reset} = authSlice.actions
export default authSlice.reducer