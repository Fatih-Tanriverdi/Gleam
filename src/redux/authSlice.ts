import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/User';

export interface AuthState {
    user: null | User;
}

const initialState: AuthState = {
    user: null,
};

const AuthSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;