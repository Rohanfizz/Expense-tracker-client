import { configureStore,createSlice } from '@reduxjs/toolkit';

const authInitialState = {
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state , action) {
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }
});

export const authSliceActions = authSlice.actions;

const store = configureStore({
    reducer: authSlice.reducer,
});

export default store;